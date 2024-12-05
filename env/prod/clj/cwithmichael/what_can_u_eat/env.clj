(ns cwithmichael.what-can-u-eat.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init       (fn []
                 (log/info "\n-=[what-can-u-eat starting]=-"))
   :start      (fn []
                 (log/info "\n-=[what-can-u-eat started successfully]=-"))
   :stop       (fn []
                 (log/info "\n-=[what-can-u-eat has shut down successfully]=-"))
   :middleware (fn [handler _] handler)
   :opts       {:profile :prod}})
