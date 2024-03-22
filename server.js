const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
require("dotenv").config();
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.Password,
    database: "employee-management-system_db"
});

// Connect to database
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database.");
    start();
});

// Start the application

function start() {
    inquirer
    .prompt({
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all departments",
            "View all roles",
            "Add an employee",
            "Add a department",
            "Add a role",
            "Update an employee role",
            "Exit"
        ]
    })
    .then((answer) => {
        switch (answer.start) {
            case "View all employees":
                viewEmployees();
                break;
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Update an employee role":
                updateEmployeeRole();
                break;
            case "Exit":
                db.end();
                break;
        }
    });
}

// View all employees

function viewEmployees() {
    const query = "SELECT * FROM employee";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// View all departments

function viewDepartments() {
    const query = "SELECT * FROM department";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// View all roles

function viewRoles() {
    const query = "SELECT * FROM role";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// Add an employee

function addEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter the employee's first name:"
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter the employee's last name:"
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter the employee's role ID:"
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter the employee's manager ID:"
        }
    ])
    .then((answer) => {
        const query = "INSERT INTO employee SET ?";
        db.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log("Employee added successfully!");
            start();
        });
    });
}

// Add a department

function addDepartment() {
    inquirer
    .prompt({
        type: "input",
        name: "name",
        message: "Enter the name of the department:"
    })
    .then((answer) => {
        const query = "INSERT INTO department SET ?";
        db.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log("Department added successfully!");
            start();
        });
    });
}

// Add a role

function addRole() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of the role:"
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary of the role:"
        },
        {
            type: "input",
            name: "department_id",
            message: "Enter the department ID of the role:"
        }
    ])
    .then((answer) => {
        const query = "INSERT INTO role SET ?";
        db.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log("Role added successfully!");
            start();
        });
    });
}

// Update an employee role

function updateEmployeeRole() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "employee_id",
            message: "Enter the employee's ID:"
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter the employee's new role ID:"
        }
    ])
    .then((answer) => {
        const query = "UPDATE employee SET role_id = ? WHERE id = ?";
        db.query(query, [answer.role_id, answer.employee_id], (err, res) => {
            if (err) throw err;
            console.log("Employee role updated successfully!");
            start();
        });
    });
}

// Export the connection


module.exports = db;