(ns cwithmichael.what-can-u-eat.env
  (:require
    [clojure.tools.logging :as log]
    [cwithmichael.what-can-u-eat.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init       (fn []
                 (log/info "\n-=[what-can-u-eat starting using the development or test profile]=-"))
   :start      (fn []
                 (log/info "\n-=[what-can-u-eat started successfully using the development or test profile]=-"))
   :stop       (fn []
                 (log/info "\n-=[what-can-u-eat has shut down successfully]=-"))
   :middleware wrap-dev
   :opts       {:profile       :dev
                :persist-data? true}})
