const inquirer = require('inquirer');

ProjectAssembler()

async function ProjectAssembler() {
    try{
        const answers = await firstQuestions()
        console.log(answers)
    } catch(err) {
        console.log(err)
    }
}


function firstQuestions(){
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
]).then(async answers => {
console.log(answers);
console.log(answers.projectName)
console.log(answers.EmployeeNum)
const employed = answers.EmployeeNum
const employ = answers.InternNum
try{

    console.log(employ)
    console.log(employed)
    for (let i = 0; i < employ; i++){
        const interns = await inquirer.prompt([
                        {
                            type: "input",
                            name: "Name",
                            message: `What is the name of the intern?`
                        },
                        {
                            type: "input",
                            name: "github",
                            message: `What is the github of this intern?`
                        }
                ]).then(answers =>{
                    console.log(answers)
                })
    }
    for (let i =0; i < employed; i++){
        const engineers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the name of the Engineer?"
            },
            {
                type: 'input',
                name: 'name',
                message: "what is the Engineer's Github?"
            }
        ]).then(answers =>{
            console.log(answers)
        })
    }

} catch(e){
    console.log(e)
}
})
}

// function employeeType(value) {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "Name",
//             message: `What is the name of the ${value}?`
//         },
//         {
//             type: "input",
//             name: "github",
//             message: `What is the github of this ${value}?`
//         }
// ]).then(answers =>{
//     console.log(answers)
// })
// }

const EmployeeType = function(name, id, email, employee) {
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
