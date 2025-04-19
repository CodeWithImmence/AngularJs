//Datatyepes
//1 String
let lname: string;
lname = "Vishal";

let newname = lname.toUpperCase();

console.log(newname);

//2. Number
let age: number;
age = 26;
age = 26.5;
let dob = "26";
let result = parseInt(dob);

console.log(age);

//3. Boolean
let isValid: boolean = false;

console.log(isValid);

//4. Array

let empList: string[];
empList = ["Santosh", "Vishal"];
let depList: Array<string>;

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

console.log(empList);
console.log(numList);

let results = numList.filter((num) => num > 2);

let results1 = numList.find((num) => num == 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(results1);
console.log(sum);

//5. Enum

const enum Color {
  Red,
  Greeen,
  Blue,
}

let c: Color = Color.Blue;
console.log(c);

//6. Tuples

let swapNumber: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num2];
}

swapNumber = swapNumbers(10, 20);
console.log(swapNumber);

//7. Any

let department: any;

department = "It";
department = 10;
