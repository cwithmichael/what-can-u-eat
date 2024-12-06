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
(defn parse-nutrients [nutrients tags]
  (filter (fn [nutrient] (= (:nutrient-id nutrient) ((first tags) nutrient-map))) nutrients))

(defn check-tmau [nutrients]
  (map (fn [nut] (cond
                   (= (:nutrient-id nut) (:choline nutrient-map)) (< (:value nut) 100))) nutrients))

(defn check-keto [nutrients]
  (map (fn [nut] (cond
                   (= (:nutrient-id nut) (:carbs nutrient-map)) (< (:value nut) 10))) nutrients))
;; TODO: Implement actual logic to check nutrients and calculate net carbs
(defn check-nutrients [food-nutrients filters]
  (let [choline (parse-nutrients food-nutrients [:choline])
        carbs (parse-nutrients food-nutrients [:carbs])
        is-low-carb? (every? true? (check-keto carbs))
        is-low-choline?  (every? true? (check-tmau choline))]
    {:can-eat? (every? true? (map #(cond
                                     (= % "tmau") (and (some? (seq choline)) is-low-choline?)
                                     (= % "keto") (and (some? (seq carbs)) is-low-carb?)
                                     :else false) filters)) :choline-missing? (empty? choline) :carbs-missing? (empty? carbs)}))

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

(defn get-food [{:keys [cache secrets]} request]
  (let [query (:food (:path-params request))
        saved-food (check-cache cache query)]
    (if (nil? saved-food)
      (let [data (fetch-food-data-from-api (:usda-api-key secrets) query)]
        (if (nil? data) (http-response/not-found)
            (do (update-cache cache query data)
                (http-response/ok {:food (convert-usda-food-to-food  data)}))))
      (http-response/ok {:food (convert-usda-food-to-food  saved-food)}))))
