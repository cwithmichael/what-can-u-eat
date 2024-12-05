(ns cwithmichael.what-can-u-eat.web.controllers.food
  (:require
   [cheshire.core :refer [parse-string]]
   [clj-http.client :as client]
   [clojure.string]
   [cwithmichael.what-can-u-eat.env :refer [defaults]]
   [cwithmichael.what-can-u-eat.config :refer [system-config]]
   [ring.util.http-response :as http-response]))

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

(defn get-food [{:keys [path-params]}]
  (let [config (system-config (or (:opts defaults) {}))
        query (:food path-params)
        food-data (parse-string (:body
                                 (client/post
                                  (str "https://api.nal.usda.gov/fdc/v1/foods/search?api_key="
                                       (-> config :system/secrets :secrets :usda-api-key))
                                  {:form-params {:query query :dataType ["Foundation", "SR Legacy"]
                                                 :pageNumber 1
                                                 :pageSize 25}
                                   :content-type :json
                                   :socket-timeout 1000      ;; in milliseconds
                                   :connection-timeout 1000  ;; in milliseconds
                                   :accept :json})) true)
        food (first (sort-by :score (:foods food-data)))]
    (http-response/ok {:food (convert-usda-food-to-food  food)})))