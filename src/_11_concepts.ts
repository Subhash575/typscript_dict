// In Below example we create the javascript object using the interfaces.

interface People {
  name: string;
  age: number;
  greet: () => string;
  // greet(): string,
}

let person: People = {
  name: "Raju",
  age: 24,
  greet: function () {
    return "hi";
    // Here we cannot use 'name' and 'age' inside greet function that why we
    // require the classes.
  },
};

let greeting = person.greet();
console.log(greeting);
