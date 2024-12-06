(ns cwithmichael.what-can-u-eat.web.controllers.food
  (:require
   [cheshire.core :refer [parse-string]]
   [clj-http.client :as client]
   [clojure.string]
   [clojure.tools.logging :as log]
   [ring.util.http-response :as http-response]
   [taoensso.carmine :as car :refer [wcar]]))

(def nutrient-map {:choline 1180
                   :carbs 1005
                   :sugars 2000
                   :fiber 1079})

(defn parse-nutrients [nutrients tag]
  (first (filter #(= (:nutrient-id %) (tag nutrient-map)) nutrients)))

(defn calculate-net-carbs [fiber carbs]
  (when (every? number? [fiber carbs])
    (- carbs fiber)))

(defn check-nutrients [food-nutrients filters]
  (let [choline (parse-nutrients food-nutrients :choline)
        carbs (parse-nutrients food-nutrients :carbs)
        fiber (parse-nutrients food-nutrients :fiber)
        net-carbs (calculate-net-carbs (:value fiber) (:value carbs))
        is-low-carb? (if (nil? net-carbs) false (< net-carbs 12))
        is-low-choline?  (if (nil? (:value choline)) false (< (:value choline) 200))]
    {:can-eat? (every? true? (map #(cond
                                     (= % "tmau") (and (some? choline) is-low-choline?)
                                     (= % "keto") (and (some? carbs) (some? fiber) is-low-carb?)
                                     :else false) filters)) :choline-missing? (nil? choline) :carbs-missing? (nil? net-carbs)}))

(defn foodcheck
  [{:keys [body-params]}]
  (let [food (:food body-params)
        filters (:filters body-params)
        result (check-nutrients (-> food :food :food-nutrients) filters)]
    (http-response/ok
     {:missing-info (some true? [(and (some #(= "tmau" %) filters) (:choline-missing? result))
                                 (and (some #(= "keto" %) filters) (:carbs-missing? result))])
      :status  (:can-eat? result)})))

(defn convert-usda-nutrient-to-nutrient [food-id nutrient]
  {:food-id food-id
   :unit-name (:unitName nutrient)
   :value (:value nutrient)
   :name (:nutrientName nutrient)
   :nutrient-id (:nutrientId nutrient)})

(defn convert-usda-food-to-food [food]
  {:id (:fdcId food)
   :description (:description food)
   :category (:foodCategory food)
   :data-type (:dataType food)
   :food-nutrients (map #(convert-usda-nutrient-to-nutrient (:fdcId food) %) (:foodNutrients food))})

(defn fetch-food-data-from-api [api-key query]
  (try
    (let [food-data (parse-string (:body
                                   (client/post
                                    (str "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" api-key)
                                    {:form-params {:query query :dataType ["Foundation", "SR Legacy"]
                                                   :pageNumber 1
                                                   :pageSize 25}
                                     :content-type :json
                                     :socket-timeout 1000      ;; in milliseconds
                                     :connection-timeout 1000  ;; in milliseconds
                                     :accept :json})) true)]
      (first (sort-by :score #(> %1 %2) (:foods food-data))))
    (catch Exception e (log/error e))))

(def storage "food-cache")

(defn check-cache [cache query]
  (try
    (wcar cache (car/hget storage query))
    (catch Exception e (log/error e))))

(defn update-cache [cache query data]
  (try
    (wcar cache (car/hset storage query data))
    (catch Exception e (log/error e))))

(defn get-food [{:keys [cache usda-api-key]} request]
  (let [query (:food (:path-params request))
        saved-food (check-cache cache query)]
    (if (nil? saved-food)
      (let [data (fetch-food-data-from-api usda-api-key query)]
        (if (nil? data) (http-response/not-found)
            (do (update-cache cache query data)
                (http-response/ok {:food (convert-usda-food-to-food  data)}))))
      (http-response/ok {:food (convert-usda-food-to-food  saved-food)}))))
