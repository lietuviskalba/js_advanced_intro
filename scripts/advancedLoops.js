topicNameSeparator("Advanced loops");

const exampleArrayForLoops = [2, 4, 16, 32, 64];
const exampleObjectForLoops = {
    someString: "Some string value",
    someNumber: 10,
    someBool: true
}

function forInEnumerating(elementToLoop) {
    for (objectPropertyValue in elementToLoop) {
        console.log("=> ", objectPropertyValue);
    }
}

function forOfIterating(elementToLoop) {
    try {
        for (valueNumber of elementToLoop) {
            console.log(">> ", valueNumber);
        }

    } catch (error) {
        console.log("Objects cannot be iterated, ", error)
    }
}

sectionNameSeparator("For OF");
console.log("Iterating thorough array values: ");
forOfIterating(exampleArrayForLoops);

sectionNameSeparator("For IN");
console.log("Enumerating thorough object properties: ");
forInEnumerating(exampleObjectForLoops);

sectionNameSeparator("Switch array and object for in and of");
console.log("Array enumerated: ");
forInEnumerating(exampleArrayForLoops);
console.log("Object iterated: ");
forOfIterating(exampleObjectForLoops);
