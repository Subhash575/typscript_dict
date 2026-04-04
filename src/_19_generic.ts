// Generic in typescript:-
/*
Generics are a language independent concept (exist in C++ as well)
1. Problem Statement
Let’s say you have a function that needs to return the first element of an array. 
Array can be of type either string or integer.
How would you solve this problem?
*/

type Input = (string | number)[];

function firstElement(arr: Input) {
  return arr[0];
}

console.log(firstElement([5, 6, 9]));

const val = firstElement(["hi", "there"]);
// val.toUpperCase(); ---> here we cannot able to apply `toUpperCase` property of string in
//  typescript because typescript compiler not able to check it syntax here.

// second problem is that
firstElement([5, "hi"]); // Here typescript accept this and not shown any problem here.

/*

What is the problem in this approach?
User can send different types of values in inputs, without any type errors
Typescript isn’t able to infer the right type of the return type

Solution - Generics
Generics enable you to create components that work with any data type
while still providing compile-time type safety.
*/

function identity<T>(arg: T): T {
  return arg;
}

let op1 = identity<string>("subhash");
let op2 = identity<number>(421);

// Here we can easily do
console.log(op1.toUpperCase());

// ------ Original Problem solution ----------------------------

function firstNum<T>(names: T[]): T {
  return names[0]!;
}

// Below instead of string we can also able to give the complex `type` also like object
let res = firstNum<string>(["ramesh", "raju", "ganesh"]);

// OR (Below is also correct)
// let res = firstNum(["ramesh", "raju", "ganesh"]);

console.log(res.toUpperCase());
