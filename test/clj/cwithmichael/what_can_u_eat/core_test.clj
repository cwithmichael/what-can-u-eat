(ns cwithmichael.what-can-u-eat.core-test
  (:require
   [clojure.test :refer :all]
   [cwithmichael.what-can-u-eat.web.controllers.food :refer [calculate-net-carbs]]))

(deftest calculate-net-carbs-test
  (is (= (calculate-net-carbs 4 6) 2)))

