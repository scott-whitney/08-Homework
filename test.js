const inquirer = require('inquirer');

inquirer.prompt([
            {
                type: "input",
                name: "projectName",
                message: "What is the name of the project?"
            },
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the Team Manager?",
            },
            {
                type: "input",
                name: "EmployeeNum",
                message: "how many Engineers's are participating in this project? please enter a #",
            },
            {
                type: "input",
                name: "InternNum",
                message: "how many Interns's are participating in this project? please enter a #",
            }
]).then(answers => {
    console.log(answers);
    console.log(answers.projectName)
    console.log(answers.EmployeeNum)
    employeeRoles(JSON.parse(answers.EmployeeNum, "Engineer"))
    employeeRoles(JSON.parse(answers.InternNum, "intern"))



})



// class example
const Employee = function(name, id, email, employee) {
    this.name = name;
    this.id = id;
    // github id
    this.email = email;
    this.employeeType = employee
    this.getName = function(){
        // get name from the axios call to github
    };
    this.getId = function(){
        // get Id image from the Axios call to github
    };
    this.getEmail = function(){
        // get Email from the Axios call to github
    }
    if(this.employee == "manager") {
        console.log('employee manager check worked')
    } else if (this.employee == "intern") {
        console.log('employee intern check worked')
    } else if(this.employee == "engineer") {
    console.log("Engineer check worked")
    }

}

// const Manager = function(name, id, email, employee){}
// const manny = new Character();
// console.log(manny);
// const scott = new Character(undefined, 100, undefined, undefined, 100);
// console.log(scott);

// employee function
const employeeRoles = function (value, employee){
    if(typeof value !== "number" || value <= 0) {
        console.log("'value' must be a positive number!")
        return;
      }
for(let i = 0; i<value; i++){
    console.log(`employee${[i]}`);
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: `What is the name of the ${employee}?`
        },
        {
            type: "input",
            name: "gitHubId",
            message: "What is this employee's github?",
        }
]).then(answers => {
console.log(answers);
})
}
}