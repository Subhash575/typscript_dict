// Interfaces have another special property. You can implement interfaces as a class.

interface People {
  name: string;
  age: number;
  isLegal(): boolean; //Here we add function in the interface which return boolean.
}

class Manager implements People {
  name: string;
  age: number;
  val: number;
  // Here you can see we can able to add extra attribute which not present inside the
  // people interface.

  // (Imp pt):- Here we write the name, age, val (in the interface, or as attribute multiple time)
  // To get rid of this we can use the `public` keyword along side with argument:-

  /*
    constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
    this.val = 7;
  }
  */

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.val = 7;
  }

  isLegal() {
    return this.age > 18;
  }

  // OR (Below is another way)

  /*
  isLegal = ()=>{
    return this.age > 18;
  }

 */
}

// Here we can see how God class extends the Manager class

// class God extends Manager {
//     constructor(name: string, age: number){
//         super(name, age)
//     }
// }

let e1 = new Manager("Subhash", 89);
// console.log(e1.val);
console.log(e1.age);
console.log(e1.isLegal());

// ----------- extends property in class -------------------

class Shape {
  constructor() {
    console.log("shape class");
  }
  area() {
    console.log("area of shape classe");
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super(); // In case of extend we use super so that I will called parent class constructor
    // first
    this.width = width;
    this.height = height;
  }
}

let rect = new Rectangle(1, 2);
rect.area();
