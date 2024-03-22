# Employee Management System

## Overview

This application is a command-line based Employee Management System that allows users to efficiently manage departments, roles, and employees within an organization. It provides a user-friendly interface to perform various operations such as viewing existing data, adding new entries, and updating employee roles. The system is built using Node.js, Inquirer.js for command-line prompts, and MySQL for database management.

## Installation

To run this application, ensure you have Node.js and MySQL installed on your system. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:
4. Set up your MySQL database by executing the provided schema.sql and seeds.sql files in your MySQL environment.
5. Configure your MySQL connection settings in the `connection.js` file.
6. You're now ready to use the application!

## Usage

To start the application, run the following command in your terminal:
Once the application is running, you'll be presented with a series of options:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

Follow the prompts to select your desired operation and provide necessary information as instructed.

### Example Scenario:

- **WHEN** I start the application
- **THEN** I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

- **WHEN** I choose to view all departments
- **THEN** I am presented with a formatted table showing department names and department ids

- **WHEN** I choose to view all roles
- **THEN** I am presented with the job title, role id, the department that role belongs to, and the salary for that role

- **WHEN** I choose to view all employees
- **THEN** I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

- **WHEN** I choose to add a department
- **THEN** I am prompted to enter the name of the department and that department is added to the database

- **WHEN** I choose to add a role
- **THEN** I am prompted to enter the name, salary, and department for the role and that role is added to the database

- **WHEN** I choose to add an employee
- **THEN** I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

- **WHEN** I choose to update an employee role
- **THEN** I am prompted to select an employee to update and their new role, and this information is updated in the database

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## Video Demistration 

## Video Demonstration

![Alt Text](/Employee-Management-System/Employee-Management-System/assets/Node-video.mp4)

## License

This project is licensed under the MIT License.

---
Created by [Adam-Knio]
