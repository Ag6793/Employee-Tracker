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
}

module.exports = new Database(connection);