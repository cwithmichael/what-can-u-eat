create table food (
  id integer primary key autoincrement, 
  description varchar(200), 
  name varchar(200), 
  category varchar(200),
  dataType varchar(200)
  );


create table foodNutrient (
  foodId integer, 
  nutrientId integer,
  name varchar(200), 
  unit varchar(200),
  value float,
  foreign key(foodId) references food(id)
  );
