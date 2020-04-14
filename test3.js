const inquirer = require('inquirer');
const fs = require('fs')
mainMenu();
var topHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Title</title>
  </head>
  <body>
  <div class="container">
  <div class="row">`

var botHtml = `
</div>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>`
// remember you add topHtml+teamhtml+botHtml
var teamHtml = ''

function mainMenu(){
    inquirer.prompt([
        {
            type: "rawlist",
            name: "projectName",
            message: "Select Employees to add to your engineering team",
            choices: ['project bio', 'add a manager', 'add an Engineer', 'add an Intern', 'Generate']
        }
]).then(answers => {
    console.log(answers);
    if(answers.projectName == "project bio"){
        ProjectBio()
    } else if (answers.projectName == 'add a manager'){
        AddAManager()
    } else if (answers.projectName == 'add an Engineer'){
        AddAnEngineer()
    } else if (answers.projectName == 'add an Intern'){
        AddAnIntern()
    } else if(answers.projectName == 'Generate'){
        generate()
    } else {
        console.log("whoops not working")
    }



})


}
// Inquirer choices main menu that will send the user to the different fuctions based on their selection
function ProjectBio(){
    console.log("project bio time")
    inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of the project?"
        },
        {
            type: "input",
            name: "bio",
            message: "short project bio",
        },
        {
            type:'input',
            name:'companyName',
            message: "What is the name of your company?"
        }
]).then(async answers => {
    console.log(answers);
    try{
      let  projectBio = `
        <div class="col-12">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${answers.projectName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${answers.companyName}</h6>
                      <p class="card-text">${answers.bio}</p>
                    </div>
                  </div>
            </div>`
        teamHtml += projectBio
        console.log(teamHtml)
        mainMenu()
    
    } catch(e){
        console.log(e)
    }
    })
// class that generates the Bio for the project Div and pumps it into the string
}

function AddAManager(){
    console.log('add a manager time')
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the name of the Manager/Director?"
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is their office number?"
        }
]).then(async answers => {
    console.log(answers);
    try{

        
        
    
    } catch(e){
        console.log(e)
    }
    })
// construct that generates a Manager Div and pumps it into the string
}

function AddAnEngineer(){
    console.log('time to add an Engineer')
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github?",
        }
]).then(async answers => {
    console.log(answers);
    try{

        
        
    
    } catch(e){
        console.log(e)
    }
    })
// construct that generates an Engineer Div and pumps it into the string
}
function AddAnIntern(){
    console.log('time to add an intern')
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the name of the Intern"
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github?",
        },
        {
            type: 'input',
            name: 'School',
            message: 'What school are they attending?'
        }   
]).then(async answers => {
    console.log(answers);
    try{

        
        
    
    } catch(e){
        console.log(e)
    }
    })
// construct that generates an Intern Div and pumps it into the string
}

function generate() {
topHtml += teamHtml
console.log(topHtml)
topHtml += botHtml
console.log(topHtml)

fs.writeFile('indexTest.html', topHtml, function(err){
    if (err) {
        return console.log(err);
    }
    console.log('Successfully Generated!')
})

}