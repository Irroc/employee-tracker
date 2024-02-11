const inquirer = require('inquirer');
const { default: Prompt } = require('inquirer/lib/prompts/base');
const getEmploy = "employees"
const getDepartments = "departments"
const getRole = "roles"
const postEmploy = "new-employee"
const postDepartment = "new-department"
const postRole = "new-role"

function makeUrl(typeCall) { // IF DEPLOYED PLEASE CHANGE URL HERE
    return urlbase = `http://localhost:3001/api/${typeCall}`

}


function start() {
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ["View all employees", "Add employee", "View all departments", "Add departments", "View all roles", "Add roles"],
                name: 'menu',
            },

        ])
        .then((response) => {

            if (response.menu === "View all employees") {
                const call = makeUrl(getEmploy)
                fetch(call)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    })
            }

            else if (response.menu === "Add employee") {
                const choices = []
                const call = makeUrl(getRole)
                fetch(call)
                    .then(response => {
                        return response.json();
                    })
                    .then(res => {
                        for (let i = 0; i < res.data.length; i++) {
                            choices.push(res.data[i].title)
                        }
                        inquirer
                            .prompt([
                                {
                                    message: 'What is the employees first name?',
                                    name: 'firstName',
                                }, {
                                    message: 'What is the employees last name?',
                                    name: 'lastName',
                                }, {
                                    type: 'list',
                                    message: 'What is the employees role?',
                                    choices: choices,
                                    name: 'role',
                                }, {
                                    type: 'list',
                                    message: 'Are they a manager?',
                                    choices: ['yes', 'no'],
                                    name: 'manager',
                                }

                            ])

                            .then((response) => {
                                const rol_id = (choices.indexOf(response.role) + 1);
                                let mana_id = 0
                                if (response.manager === 'yes') {
                                    mana_id = 1
                                }
                                const call2 = makeUrl(postEmploy)
                                fetch(call2, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        first_name: response.firstName,
                                        last_name: response.lastName,
                                        role_id: rol_id,
                                        manager_id: mana_id
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                    .then((response) => response.json())
                                    .then((json) => console.log(json));
                            })
                    })
            }

            else if (response.menu === "View all departments") {
                const call = makeUrl(getDepartments)
                fetch(call)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    })
            }

            else if (response.menu === "Add departments") {
                        inquirer
                            .prompt([
                                {
                                    message: 'What is the name of the department?',
                                    name: 'dpart',
                                },
                            ])
                            .then((response) => {
                                const call2 = makeUrl(postDepartment)
                                fetch(call2, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        name: response.dpart
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                    .then((response) => response.json())
                                    .then((json) => console.log(json));
                            })
            }

            else if (response.menu === "View all roles") {
                const call = makeUrl(getRole)
                fetch(call)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    })
            }

            else if (response.menu === "Add roles") {
                    const choices = []
                    const call = makeUrl(getDepartments)
                    fetch(call)
                        .then(response => {
                            return response.json();
                        })
                        .then(res => {
                            for (let i = 0; i < res.data.length; i++) {
                                choices.push(res.data[i].name)
                            }
                            inquirer
                                .prompt([
                                    {
                                        message: 'What is the name of the new role?',
                                        name: 'roleName',
                                    }, {
                                        message: "What is this role's salary?",
                                        name: 'roleSalary',
                                    }, {
                                        type: 'list',
                                        message: 'What department does this role belong to?',
                                        choices: choices,
                                        name: 'roleDepartment',
                                    },
    
                                ])
    
                                .then((response) => {
                                    const depart_id = (choices.indexOf(response.roleDepartment) + 1);
                                    const call2 = makeUrl(postRole)
                                    fetch(call2, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            title: response.roleName,
                                            salary: response.roleSalary,
                                            department_id: depart_id
                                        }),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    })
                                        .then((response) => response.json())
                                        .then((json) => console.log(json));
                                })
                        })
                }
            


        })
}

start()