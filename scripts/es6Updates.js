topicNameSeparator("ES6")

// Deconstruction
sectionNameSeparator("Deconstruction")
const myObject = {
    myName: "Some name",
    myNumber: 10,
    myBool: true
}

// Standard way
const OldWayName = myObject.myName;
const OldWayNumber = myObject.myNumber;
let OldWayBool = myObject.myBool;

// ES6 way, if object keys match exactly variables
const { myName, myNumber } = myObject;
let { myBool } = myObject;

console.log(myName);
console.log(myNumber);
console.log(myBool);

// Template strings
sectionNameSeparator("Template strings")
let exampleString = "THE STRING"
let exampleNumber = 100;
let exampleBool = false;
const oldWayStringConcat = "Adding string: " + exampleString + "\n Adding number: " + exampleNumber + "\n Adding bool: " + exampleBool;
console.log("old: \n", oldWayStringConcat);
const newTemplateString = `Adding the string ${exampleString} \n Adding number: ${exampleNumber*2-5/6} \n Adding bool: " + ${exampleBool};`
console.log("new template string: \n", newTemplateString);

// Default function parameters
sectionNameSeparator("Default parameters")

const functionExampleWithDefaultParameters = function (defaultString = " I am a default string argument", defaultNumber = 10,) {
    return defaultString + " With a number " + defaultNumber;
}

console.log(functionExampleWithDefaultParameters());
console.log(functionExampleWithDefaultParameters("I am NOT a default argument", -1));

// Arrow functions
sectionNameSeparator("Arrow functions")
function oldWayAddTwoNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
}
console.log("Two numbers added old way: ", oldWayAddTwoNumbers(5,11.5));

const arrowFunction = (numberOne, numberTwo) => numberOne + numberTwo;
console.log("Two numbers added with Arrow function: ", arrowFunction(44,322.4));

