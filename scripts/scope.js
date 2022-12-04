// Global var change
var thisIsAGlobalVar = "This is a variable";

function functionThatChangesGlobalVar() {
    thisIsAGlobalVar = "This is a variable changed once";
    thisIsAGlobalVar = "This is a variable changed twice";

    if (thisIsAGlobalVar.length > 50) {
        thisIsAGlobalVar = "This is a variable changed by IF";
    }

    console.log(thisIsAGlobalVar);
}

sectionNameSeparator("Changing global variable")
functionThatChangesGlobalVar()

// Global and local var change
var myVar = "I am a variable global"

function localFirstOverGlobal() {
    var myVar = "I am a func local var";
    if (myVar.length > 1) {
        myVar = "I am changed by an if";
    }
    console.log(myVar);
}

sectionNameSeparator("Local var prioritized over global")
localFirstOverGlobal()

// Easier and a more clear section separation to see on console
function sectionNameSeparator(sectionName) {
    console.log("###\n ---", sectionName, "\n###")
}