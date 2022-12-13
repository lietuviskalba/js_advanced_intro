topicNameSeparator("Pass by value or reference");
sectionNameSeparator("Pass by Value");

const someNumber = 10;
const someString = "Some string";
const someBoolean = true;

console.log("Number, string, boolean: ", someNumber, someString, someBoolean);

sectionNameSeparator("Pass by Reference");

const exampleObject = {
    someNumber: 10,
    nestedObject: {
        someNestedString: "I am a deep level string UNCHANGED"
    }
}

//Pass by reference
const passByReferenceObject = exampleObject;
console.log("***Object passed by reference: ");
console.log("Object passed by reference: ", passByReferenceObject);

const shallowClone1 = Object.assign({}, exampleObject);
const shallowClone2 = { ...exampleObject };
const deepClone = JSON.parse(JSON.stringify(exampleObject));

//Shallow clone
console.log("***Shallow clones: ");
console.log("Shallow clone 1:", shallowClone1.nestedObject.someNestedString);
console.log("Shallow clone 2:", shallowClone2.nestedObject.someNestedString);

shallowClone2.nestedObject.someNestedString = "Deep level string changed";

console.log("AFTER change. Shallow clone 1:", shallowClone1.nestedObject.someNestedString);
console.log("AFTER change. Shallow clone 2:", shallowClone2.nestedObject.someNestedString);

//Deep clone
console.log("***Deep clone: ");
console.log("Deep clone: ", deepClone.nestedObject.someNestedString);


