topicNameSeparator("Advanced objects")
sectionNameSeparator("Referencing")
// Reference types
const myObject1 = { someNumber: 10 };
const myObject2 = myObject1
const myObject3 = { someNumber: 10 };
console.log("When referencing objects, they assign an address in memory and changes in one will affect others that reference the data.");
console.log("Object 1:", myObject1);
console.log("Object 2:", myObject2);
console.log("Object 3:", myObject3);
myObject2.someNumber = 22;
console.log("Object 2 changed some number which affected Object 1:", myObject1, " \n Object 2: ", myObject2);

sectionNameSeparator("Context and scope")
// Scope vs context
const exampleObject = {
    propertyInsideThisObjectScope: "Value of that property only inside this objects scope",
    functionWithContextInsideThisObject: function () {
        console.log("Which object/place does this function belong to? ", this);
    }
}
exampleObject.functionWithContextInsideThisObject();

sectionNameSeparator("Instantiation")
// Instantiation
class User {
    constructor(username, type) {
        console.log("User class, check context: ", this);
        this.username = username;
        this.type = type;
    }
    userGreeting() {
        console.log(`User [${this.username}] says hello`);
    }
}

class Worker extends User {
    constructor(username, type) {
        super(username, type);
        console.log("Worker class, check context: ", this);
    }
    checkWorkerType() {
        console.log(`This user: [${this.username}] is a type [${this.type}]`);
    }
}

const worker1 = new Worker("Alice", "Basic");
const worker2 = new Worker("Bob", "Advanced");
const worker3 = new Worker("Cindy", "Basic");
const user1 = new User("User example 1", "Test");

console.log(worker1.checkWorkerType());
console.log(worker1.userGreeting());
console.log(worker2.checkWorkerType());
console.log(worker2.userGreeting());
console.log(worker3.checkWorkerType());
console.log(worker3.userGreeting());
console.log(user1.userGreeting());