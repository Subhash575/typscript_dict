// (IMP):- Javascript not support abstract classes only Typescript support.
// (Imp):- Here we learn about difference between interfaces and abstract classes

// Inteface example:-
interface People {
  name: string;
  age: number;
  isLegal(): boolean; //Here we add function in the interface which return boolean.
}

abstract class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet: () => void;
  // (v.imp):- In typescript difference between abstract and interface is that abstract provide
  // default function implementation but it not provide by the interface.
  // Below `info` is default function implementation in abstract class.
  info() {
    console.log("user here");
  }
}

class Manager extends User {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  greet = () => {
    console.log("Hi", this.name);
  };
}

let m1 = new Manager("viki", 22);
m1.greet();
m1.info();

//(imp) Difference between type and interface (type have no property of classes but interface
// mainly use in classes)
