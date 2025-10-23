let myGrade = 42;

if (myGrade >= 90) {
console.log("Well done you earned an A!");
}
else if (myGrade >= 80) {
console.log("You did well, B!");
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
//the else statement covers anything below the value in this case 60

//the switch statement
let gradeCategory = Math.floor(myGrade / 10);

//the statement divides the grade by 10 and rounds down to the nearest whole number
//the result is then checked against each case in the switch statement
//for example a grade of 42 divided by 10 is 4.2 which rounds down to 4
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

for (let i = 1; i <= 100; i++) {console.log(i);}
//prints number 1-100

///////////////////////////////////////////////////////////
//prints only even numbers from 1-100
//this operator % is the modulus operator. It returns the remainder of a division operation.
//in this case, i % 2 checks if the number i is divisible by 2 without a remainder.
//if the result is 0, it means the number is even.
for (let i = 1; i <= 100; i++) {
if (i % 2 !== 0) {
console.log("!");
} else {console.log(i)}
}



//////////////////////////////////////////////////////////
//for loop syntax

/*for (initialization; condition; increment) {
code to be executed
}*/



//while loop syntax

/*while (condition) {
code to be executed
}*/


//do while loop syntax

/*do {
code to be executed
} while (condition);*/
