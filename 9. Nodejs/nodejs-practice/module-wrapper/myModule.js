console.log("Inside myModule.js");

console.log("Filename:", __filename);
console.log("Directory:", __dirname);

function greet(name) {
    return "Hello, " + name + "!";
}

module.exports = greet;
