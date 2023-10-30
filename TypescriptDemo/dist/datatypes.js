"use strict";
/*string */
let lname;
lname = "Patrick";
let newname = lname.toUpperCase();
console.log(newname);
/*numbers */
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
console.log(result);
/* boolean */
let isValid = true;
console.log(isValid);
/* array */
let empList;
empList = ["Patrick"];
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let emp = empList.find((emp) => emp === "Patrick");
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(emp);
console.log(sum);
// enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Blue;
let c = 2 /* Blue */;
// tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
// swapNumbs[2];
// any
let department;
// let department;
department = "IT";
department = 10;
// do not use any in codebase
// "noImplicitAny: true" in tsconfig.json
function addNum(num1, num2) {
    return num1 + num2;
}
let newSum = addNum(10, 20);
// void
//# sourceMappingURL=datatypes.js.map