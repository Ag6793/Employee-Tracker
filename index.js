const inquirer = require('inquirer');
const prompts = require('./src/prompts');



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