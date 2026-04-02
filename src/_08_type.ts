// type in typescript.

// interface---> 01
interface User {
  name: string;
  age: number;
}

// type----> 02
type userType = {
  name: string;
  age: number;
};

// answer-01
// let user: User = {
//     name: 'Ramesh',
//     age: 25

// }

// answer-02
let user: userType = {
  name: "Rahul",
  age: 24,
};

console.log(user);

// How to run or compiler typescript code is:- npx tsc -b
//then run :- node src/_08_type.js or _08_type.ts

// 1. Union in type:-  Interfaces not provide union property. It only provide by the type.

type StringOrNumber = string | number;

function printID(id: StringOrNumber) {
  console.log(id);
}

printID(23); //number
printID("345"); //string

// 2. Intersection in type:- Only type provide this property not interface.

type Emplpoyee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

// Intersection

type TeamLead = Emplpoyee & Manager;

let teamLead: TeamLead = {
  name: "Subhash",
  startDate: new Date(),
  department: "Software Engineer",
};

console.log(teamLead);
