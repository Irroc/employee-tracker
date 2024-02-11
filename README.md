# Employee Tracker
This employee tracker was made to help the user track the employees information easier as well as add employees to departments and different roles they may have while working for the user

## Description

This application uses sequilize and express to save the data in a real mysql server and not just in the users browser.
This also utilizes inquirer to prompt the user to ask what they want to do as well as help the user fill out the required fields to add employees , roles or departments.

## Technologies Used

- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)

## Installation

1.  Clone repository
2.  Then un `npm i` to install the dependencies
3.  Use `mysql -u root` to enter mysql 
4.  Then use `source ./db.schema.sql` to exicute the schema setup fot the server
5.  Then use `source ./db.seeds.sql` to add seeds to your database if you want to have some preloaded data
6.  Use `quit` to go back to your nomal terminal 

## Usage

- To start using the application, input the following in your Terminal

   `node server.js`

- Follow the prompts to decide what youd like to do

