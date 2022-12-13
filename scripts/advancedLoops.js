topicNameSeparator("Advanced loops");

const exampleArray = [2, 4, 16, 32, 64];
const exampleObject = {
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
forOfIterating(exampleArray);

sectionNameSeparator("For IN");
console.log("Enumerating thorough object properties: ");
forInEnumerating(exampleObject);

sectionNameSeparator("Switch array and object for in and of");
console.log("Array enumerated: ");
forInEnumerating(exampleArray);
console.log("Object iterated: ");
forOfIterating(exampleObject);
