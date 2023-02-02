USE company_db;

-- To prepopulate database
INSERT INTO department (department_name)
VALUES ("IT"), ("Accounting"), ("Shipping")

INSERT INTO role (role_title, salary, department_id)
VALUES ("Coder", 55000, 1), ("Accountant", 66000.50, 2), ("Consultant", 45000, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Burns", 1, NULL), ("Jane", "Doe", 2, 55), ("John", "Doe", 3, NULL)