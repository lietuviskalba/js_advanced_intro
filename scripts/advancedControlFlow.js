topicNameSeparator("Advanced control flowtopicNameSeparator")

// ternary operator
sectionNameSeparator("Ternary operator")

var boolean = true;
var experiencePoints = boolean ? "Statement is true" : "Statement is FALSE";

console.log(experiencePoints);

// Switch
sectionNameSeparator("Switch")

var cardinal_direction = "W";

switch(cardinal_direction){
    case "N":
        console.log("North");
        break;
    case "S":
        console.log("South");
        break;
    case "W":
        console.log("West");
        break;
    case "E":
        console.log("East");
        break;
    default:
        console.log("Not a cardinal direction");
        break;
}