(ns cwithmichael.what-can-u-eat.core
  #_{:clj-kondo/ignore [:unresolved-var]}
  (:require
   [ajax.core :refer [POST GET]]
   [goog.string :as gstring]
   [goog.string.format]
   [uix.core :refer [$ defui]]
   [uix.dom]))

(defn get-value [val] (-> val .-target .-value))

(defn calculate-net-carbs [fiber carbs]
  (when (every? number? [fiber carbs])
    (gstring/format "%.2f" (- carbs fiber))))

(def nutrient-map {:choline 1180
                   :carbs 1005
                   :sugars 2000
                   :fiber 1079})

(defn parse-nutrients [nutrients tag]
  (first (filter #(= (:nutrient-id %) (tag nutrient-map)) nutrients)))

;; -------------------------
;; Views 
(defui filter-list [{:keys [handle-filter-change]}]
  ($ :ul.filterList
     ($ :li
        ($ :input {:type "checkbox" :id "keto" :name "keto" :value "keto"
                   :on-change #(handle-filter-change (get-value %))})
        ($ :label {:for "keto"} "Keto Friendly"))
     ($ :li
        ($ :input {:type "checkbox" :id "tmau" :name "tmau" :value "tmau"
                   :on-change #(handle-filter-change (get-value %))})
        ($ :label {:htmlFor "tmau"} "TMAU Friendly"))))

(defui message-view [{:keys [in-default-state? food-name missing-info? can-eat? nutrients]}]
  (let [message (cond
                  in-default-state? nil
                  missing-info? ($ :span.messageTextFailure "Missing information to determine")
                  can-eat? ($ :span.messageTextSuccess "You can eat it! Just make sure to watch your total daily intake.")
                  :else ($ :span.messageTextFailure "You should probably not eat it."))
        sugars (parse-nutrients nutrients :sugars)
        choline (parse-nutrients nutrients :choline)
        fiber (parse-nutrients nutrients :fiber)
        carbs (parse-nutrients nutrients :carbs)
        net-carbs (calculate-net-carbs (:value fiber) (:value carbs))]
    ($ :div.message
       message
       (when (some? food-name) ($ :p.foodDescription (str "Food description: " food-name)))
       (when (and (some? nutrients) (not missing-info?)) ($ :div.nutrients
                                                            (when net-carbs ($ :p.nutrient (str "Net Carbs: " net-carbs "g")))
                                                            (when sugars ($ :p.nutrient (str "Sugars: " (:value sugars) (:unit-name sugars))))
                                                            (when fiber ($ :p.nutrient (str "Fiber: " (:value fiber) (:unit-name fiber))))
                                                            (when carbs ($ :p.nutrient (str "Total Carbs: " (:value carbs) (:unit-name carbs))))
                                                            (when choline ($ :p.nutrient (str "Choline: " (:value choline) (:unit-name choline)))))))))

(defui search-form [{:keys [handle-submit filters handle-filter-change]}]
  (let [[query set-query!] (uix.core/use-state "")]
    ($ :form.searchForm
       ($ filter-list {:filters filters :handle-filter-change handle-filter-change})
       ($ :input.searchBar {:placeholder "enter food"
                            :type "text"
                            :name "food"
                            :onChange #(set-query! (get-value %))})
       ($ :button.searchButton {:type "submit" :on-click #(handle-submit % query)} "Can I Eat It?"))))

(defui home-page []
  (let [[filters set-filters!] (uix.core/use-state [])
        [food set-food!] (uix.core/use-state nil)
        [can-eat? set-can-eat!] (uix.core/use-state false)
        [nutrients set-nutrients!] (uix.core/use-state nil)
        [in-default-state? set-in-default-state!] (uix.core/use-state true)
        [in-loading-state? set-in-loading-state!] (uix.core/use-state false)
        [missing-info? set-missing-info!] (uix.core/use-state false)
        check-food (fn [food-data filters]
                     #_{:clj-kondo/ignore [:unresolved-var]}
                     (POST "http://localhost:3000/api/checkFood"
                       {:handler (fn [response]
                                   (set-missing-info! (:missing-info response))
                                   (set-can-eat! (:status response)))
                        :params {:food food-data :filters filters}}))
        handle-filter-change (fn [val]
                               (if (some  #(= % val)  filters)
                                 (set-filters! (into [] (filter #(not= % val) filters)))
                                 (set-filters! (conj filters val))))
        handle-submit (fn [e query]
                        (.preventDefault e)
                        (set-in-loading-state! true)
                        (set-in-default-state! false)
                        #_{:clj-kondo/ignore [:unresolved-var]}
                        (GET (str "http://localhost:3000/api/food/" query)
                          {:handler (fn [response]
                                      (set-food! (:food response))
                                      (set-nutrients! (-> response :food :food-nutrients))
                                      (check-food response filters)
                                      (set-in-loading-state! false))}))]
    ($ :div.container
       ($ :h1.heading "Can you eat it?")
       ($ search-form {:handle-submit handle-submit
                       :filters filters
                       :handle-filter-change handle-filter-change})
       (if in-loading-state? ($ :p.loadingMessage "Loading...")
           ($ message-view {:in-default-state? in-default-state?
                            :food-name (:description food)
                            :missing-info? missing-info?
                            :can-eat? can-eat?
                            :nutrients nutrients})))))

;; -------------------------
;; Initialize app


(defonce root (uix.dom/create-root (.getElementById js/document "app")))

(defn ^:export ^:dev/once init! [] (uix.dom/render-root ($ home-page) root))
