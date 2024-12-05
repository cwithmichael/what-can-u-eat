(ns cwithmichael.what-can-u-eat.schemas)

(def FoodNutrient
  [:map
   [:food-id :int
    :nutrient-id :int
    :name :string
    :unit :string
    :value :int]])

(def Food
  [:map
   [:id :int
    :description :string
    :name :string
    :category :string
    :data-type :string
    :food-nutrients [:sequential FoodNutrient]]])


