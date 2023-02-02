const connection = require('./connection.js');

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    vDepartments() {
        return this.connection.promise().query(
            'SELECT department.id, department.department_name FROM department;'
        )
    }
}

module.exports = new Database(connection);