const questions= {
startPrompt: [
    {
        type: 'list',
        name: 'menuAction',
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role","Quit"]
    }
],
departmentPrompt: [
    {
        type: 'input',
        name: 'department_name',
        message: "What is the department's name?"
    }
],
rolePrompt: [
    {
        type: 'input',
        name: 'role_title',
        message: "What is the title for the role?"
    },
    {
        type: 'input',
        name: 'salary',
        message: "What is the salary for the role?"
    },
],
employeePrompt: [
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's firstname?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's lastname?"
    },
    
    {
        type: 'input',
        name: 'manager_id',
        message: "What is the employee's manager id?"
    },
],
};

module.exports = questions
