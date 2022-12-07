topicNameSeparator("Functions")

sectionNameSeparator("Currying")

const addTwoNumbers = (numberOne, numberTwo) => numberOne + numberTwo;
console.log("Adding two numbers: ", addTwoNumbers(5, 10));

const addTwoNumbersByCurrying = (numberOne) => (numberTwo) => numberOne + numberTwo;

console.log("Add two numbers by currying and only giving the first argument: ",
    addTwoNumbersByCurrying(2));
console.log("Add two numbers by currying BOTH arguments: ", addTwoNumbersByCurrying(2)(8));

sectionNameSeparator("Compose")
const composeFunction = (functionOne, functionTwo) => (someNumber) => functionOne(functionTwo(someNumber));
const incrementByOne = (someNumber) => someNumber + 1;

console.log("This compose func will add +1 two times to a number: ", composeFunction(incrementByOne, incrementByOne)(4));