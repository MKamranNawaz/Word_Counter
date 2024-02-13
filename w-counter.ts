import inquirer from 'inquirer'

// word count function without space
function wcounter(paragraph:string){ 
    let freeSpace = paragraph.replace(/\s/g,"")  /*rigix*/
    return freeSpace.length
}
// console.log(wcounter("hello word counter"));
// wcounter("");

// User input function
async function startcount(wcounter:(text:string)=>number){
// loop
    do {
    let result = await inquirer.prompt({
        type: "input",
        message: "type any text to count...",
        name: "text"
})
// console.log(result.text);
console.log(wcounter(result.text))
}
while (true)
}

startcount(wcounter)