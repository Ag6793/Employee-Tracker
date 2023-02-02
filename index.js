const inquirer = require('inquirer');
const questions = require('./src/questions.js');
const cTable = require('console.table');
const Database = require('./db/query.js');

const menu = () => {
    console.log('\n');
    inquirer
        .prompt(questions.startPrompt)
        .then(function ({ menuAction }) {
            switch (menuAction) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    console.log('Update employee')
                    break;
                case 'Quit':
                    quit();
                default:
                    console.log('default')
                    break;
            }
        })
}

async function viewDepartments() {
    let [viewD] = await Database.vDepartments();
    console.log('\n');
    console.table(viewD);
    menu();

};

async function viewRoles() {
    let [viewR] = await Database.vRoles();
    console.log('\n');
    console.table(viewR);
    menu();
}

async function viewEmployees() {
    let [viewE] = await Database.vEmployees();
    console.log('\n');
    console.table(viewE);
    menu();
}

async function addDepartment() {
    let addD = await inquirer.prompt(questions.departmentPrompt);
    await Database.aDepartment(addD);
    menu();
}

async function addRole() {
    let [departments] = await Database.vDepartments();
    let allDepartments = departments.map(({ id, department_name }) => ({
        name: department_name,
        value: id
    }));

    let department_list = {
        type: 'list',
        name: 'department_id',
        message: "What is the department for the role?",
        choices: allDepartments
    }
    questions.rolePrompt.push(department_list)
    let addR = await inquirer.prompt(questions.rolePrompt);
    console.log(addR)
    await Database.aRole(addR);
    menu();
}

async function addEmployee() {
    let [roles] = await Database.vRoles();
    let allRoles = roles.map(({ id, role_title }) => ({
        name: role_title,
        value: id
    }));
    let role_list = {
        type: 'list',
        name: 'role_id',
        message: "What is the employee's role?",
        choices: allRoles
    }
    questions.employeePrompt.push(role_list)
    let addE = await inquirer.prompt(questions.employeePrompt);
    console.log(addE)
    await Database.aEmployee(addE);
    menu();
}


function quit() {
    console.log('Bye');
    process.exit();
}






menu();

// When you select view all departments, you will be presented with a table shoqing department names
//and department ids

//When you choose to view all roles
//you are presented with the job title, role id, the department that the role belongs to, and the salary for that role

//when you choose view all employees
//you are presented with a table showing employee data, including employee ids, firstnames, lastnames, job titles, departments, salaries
//and managers that the employees report to

//when you choose to add a department
//you are prompted to enter name, salary, and the department for the role, and the role is added to the database

//when you choose to add an employee
//you enter the employees firstname, lastname, role, and manager, and that employee is added to the database

//when you choose to update an employee role
// you are prompted to select an employee to update, their new role, and then the information is updated in the database
