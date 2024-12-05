-- Place your queries here. Docs available https://www.hugsql.org/
-- :name create-food! :! :n
-- :doc creates a new food record
INSERT INTO food
(id, name, description, category, dataType)
VALUES (:id, :name, :description, :category, :dataType)

-- :name update-food! :! :n
-- :doc update an existing food record
UPDATE food
SET name = :name, description = :description, category = :category, dataType = :dataType
WHERE id = :id

-- :name get-food :? :1
-- :doc retrieve a food given the id.
SELECT * FROM food
WHERE id = :id

-- :name food-by-name-like :? :1
-- :doc retrieve a food given the name.
SELECT * FROM food
WHERE name like :name-like