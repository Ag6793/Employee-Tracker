const connection = require('./connection.js');

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    vDepartments() {
        return this.connection.promise().query(
            'SELECT department.id, department.department_name FROM department;'
        );
    }

    vRoles() {
        return this.connection.promise().query(
            'SELECT role.id, role.role_title, department.department_name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id'
        );
    }

    vEmployees() {
        return this.connection.promise().query(
            'SELECT employee.id, employee.first_name, employee.last_name, role.role_title, department.department_name AS department, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'
        );
    }
}

module.exports = new Database(connection);