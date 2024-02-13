import inquirer from 'inquirer';
function wcounter(paragraph) {
    let freeSpace = paragraph.replace(/\s/g, "");
    return freeSpace.length;
}
// console.log(wcounter("hello word counter"));
// wcounter("");
async function startcount(wcounter) {
    do {
        let result = await inquirer.prompt({
            type: "input",
            message: "type any text to count...",
            name: "text"
        });
        // console.log(result.text);
        console.log(wcounter(result.text));
    } while (true);
}
startcount(wcounter);
