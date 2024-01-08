INSERT INTO departments (name)
VALUES ("Checkout"),
       ("Stocking"),
       ("Receiving"),
       ("Customer_Service"),
       ("Security");

INSERT INTO roles (title, salary, department_id)
VALUES ("Front Employee", 30000, 1),
       ("Shelf Stocker", 35000, 2),
       ("Back End Recieving", 40000, 3),
       ("Customer Service Manager", 60000, 4),
       ("Night Time Security", 100000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id )
VALUES ("Jim", "Jones", 1, 0),
       ("Tom", "Calahand", 2, 0),
       ("Bob", "Ward", 3, 0),
       ("Emma", "Holt", 4, 1),
       ("Lucas", "Smith", 5, 0);
       
