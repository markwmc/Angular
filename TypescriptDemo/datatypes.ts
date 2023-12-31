
/*string */ 
let lname : string;

lname = "Patrick";

let newname = lname.toUpperCase();

console.log(newname);

/*numbers */ 
let age: number;
age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

console.log(result);

/* boolean */ 
let isValid : boolean = true;

console.log(isValid);

/* array */

let empList : string[]; 

empList = ["Patrick"];


let numList : Array<number>;

numList = [1,2,3,4,5];

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

 enum Color1 {
    Red,
    Green,
    Blue
}

 const enum Color {
    Red,
    Green,
    Blue
}

let c1: Color1 = Color1.Blue;
let c: Color = Color.Blue;

// tuples

let swapNumbs: [firstNumber: number, secondNumber : number];

function swapNumbers(num1:number, num2: number) : [number, number] {
    return [num2, num1]
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
// swapNumbs[2];


// any

let department: any;
// let department;

department = "IT";
department = 10;

// do not use any in codebase

// "noImplicitAny: true" in tsconfig.json

function addNum(num1: number, num2: number) {
    return num1 + num2

}

let newSum = addNum(10,20);

// void

