// named
function add(num1: number, num2: number) : number{
  return num1 + num2;
}

//function add1(num1: number, num2: number, num3?: number) : number{
  //  return num3? num1 + num2 + num3 : num1 + num2;
  // }

// console.log(2,3,5);
console.log(add(2,3));

// arrow
const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;

console.log(sub(2,3));
console.log(sub(2,3,5));



//function expression
const mult = function(num1:number, num2:number) : number {
    return num1 * num2;
};

// rest parameters
function add2(num1: number, num2: number, ...num3: number[]) : number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);

}

let numbrs = [1,2,3,4,5];
console.log(add2(2,3, ...[5,6,7]));

// console.log(add2(2,3,5,6,7,8,9,10));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResutl = getItems<number>([1,2,3,4,5]);

let concatString = getItems<string>(["a","b", "c", "d", "e"]); 


