TopicNameSeparator("Scope")
// Global var change
sectionNameSeparator("Changing global variable")
var thisIsAGlobalVar = "This is a variable";

function functionThatChangesGlobalVar() {
    thisIsAGlobalVar = "This is a variable changed once";
    thisIsAGlobalVar = "This is a variable changed twice";

    if (thisIsAGlobalVar.length > 50) {
        thisIsAGlobalVar = "This is a variable changed by IF";
    }

    console.log(thisIsAGlobalVar);
}

functionThatChangesGlobalVar()

// Global and local var change
sectionNameSeparator("Local var prioritized over global")

var myVar = "I am a variable global"

function localFirstOverGlobal() {
    var myVar = "I am a func local var";
    if (myVar.length > 1) {
        myVar = "I am changed by an if";
    }
    console.log(myVar);
}

localFirstOverGlobal()

// Let and const
sectionNameSeparator("Let and const")

let stringExampleInsideAndOut = "I am a LET global string"

if (true) {
    let stringExampleInsideAndOut = "I am a LET string inside the if scope"
    console.log("Inside: ", stringExampleInsideAndOut);
}
console.log("Outside: ", stringExampleInsideAndOut);

const constVariable = "This cannot changed as it a constant, use it also for functions, objects...";
console.log(constVariable);