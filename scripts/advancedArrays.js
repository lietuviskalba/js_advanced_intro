topicNameSeparator("Arrays")

const defaultArrayForAllExamples = [2, 6, 9, 15, 79, 96]

sectionNameSeparator("Standard iteration")
let doubleTheArrayValues = []
const iterationArray = defaultArrayForAllExamples.forEach(arrayNumber => {
    doubleTheArrayValues.push(arrayNumber * 2);
})
console.log("Doubled values: ", doubleTheArrayValues)

sectionNameSeparator("Map");
const mapDoubleArrayValues = defaultArrayForAllExamples.map(arrayNumber => {
    return arrayNumber * 2;
})
console.log("Map values: ", mapDoubleArrayValues);
const mapDoubleArrayValuesCompactSyntax = defaultArrayForAllExamples.map(arrayNumber => arrayNumber * 2)
console.log("Map compact values (should be the same): ", mapDoubleArrayValuesCompactSyntax);

sectionNameSeparator("Filter");
const filterArrayEvenNumbers = defaultArrayForAllExamples.filter(arrayNumber => arrayNumber % 2 == 0)
console.log("Filtered array even values: ", filterArrayEvenNumbers);

sectionNameSeparator("Reduce");
const reduceArray = defaultArrayForAllExamples.reduce((accumulator, arrayNumber) =>{
    return accumulator + arrayNumber;
}, 0)
console.log("Reduce array: ", reduceArray);
