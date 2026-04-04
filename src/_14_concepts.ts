// `type` in typescript

// `type` have "=" symbol but interface not have this.
type People = {
  name: string;
  age: number;
};

interface Address {
  state: string;
  city: string;
  pincode: number;
}

// 1pt:- We can implement the interface in class but not `type`.
// 2pt:- `type` let you do `union`  and `intersection`.

// --- Intersection example-------
// In case of intersection repeated things come only one time.

type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};

// we need above property in teamLead
type TeamLead = Employee & Manager;

let teamLead: TeamLead = {
  name: "Suraj",
  startDate: "04-04-2026",
  department: "Software Engineer",
};

console.log(teamLead);

// ------------- Union example-----------------------------

type GoodUser = {
  name: string;
  gifts: string;
};

type BadUser = {
  name: string;
  ip: string;
};

type User = GoodUser | BadUser;

let e: User = {
  name: "Neeraj",
  gifts: "Laptop",
  ip: "1.2.34.5",
};

console.log(e);
