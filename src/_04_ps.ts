// Create a function that takes another function as input, and runs it after 1 second.

/*
solution:- 
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
}) 

*/

// -------------- Learning ------------------------------------------------

// For passing function we use this:-
// Function Type Syntax:-
//  () => string

// Means:
// A function that takes NO arguments and returns a string

// example 2:-
// function example(fn: (x: number) => number) {}
// fn is a function that takes a number and returns a number

// Example:- Understanding the how to pass function as parameter in typescript.
function tp1(tp: () => string, name: string): string {
  return `${tp()} ${name}`;
}

function tp2(): string {
  return "hello";
}

console.log(tp1(tp2, "Neha"));
