let myGrade = 42;

if (myGrade >= 90) {
console.log("Well done you earned an A!");
}
else if (myGrade >= 80) {
console.log("You got a good work B!");
}
else if (myGrade >= 70) {
console.log("You got a C!");
}
else if (myGrade >= 60) {
console.log("You've got work to do because you got a D!");
}
else {
console.log("You got an F, it's time for tutoring!");
}
//the else statment covers anything below the value in this case 60

//the switch statement
let gradeCategory = Math.floor(myGrade / 10);

switch (gradeCategory) {
case 10:
case 9:
console.log("Well done you earned an A!");
break;
case 8:
console.log("You got a good work B!");
break;
case 7:
console.log("You got a C!");
break;
case 6:
console.log("You've got work to do because you got a D!");
break;
default:
console.log("You got an F, it's time for tutoring!");
break;
}
//I prefer the switch statements. It's easy for me to understand because it simply checks the value of the variable against each case.
//I think the switch statement is cleaner and easier to read as its a bit more simple to check for errors.