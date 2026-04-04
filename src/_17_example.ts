// Example:- Given a list of users, filter out the users that are legal(greater than 18 years of age)

interface User {
  firsName: string;
  lastName: string;
  age: number;
}

function legal(arr: User[]) {
  for (let i = 0; i < arr.length; i++) {
    // -- (v.imp):- we use `!` symbol to justify that arr[i] is not undefined in typescript.
    if (arr[i]!.age > 18) {
      console.log(arr[i]!.firsName);
    }
  }
}

const arr: User[] = [
  {
    firsName: "Sandeep",
    lastName: "Nandi",
    age: 24,
  },
  {
    firsName: "Ganesh",
    lastName: "Kumar",
    age: 18,
  },
  {
    firsName: "Neeraj",
    lastName: "Gupta",
    age: 24,
  },
  {
    firsName: "Hari",
    lastName: "khatri",
    age: 22,
  },
];

legal(arr);

// -------------------- important to know --------------------

interface Point2D {
  x: number;
  y: number;
}

interface Name {
  name: string;
}

type NameAndPoint = Point2D & Name;
// Here we can see that type take `Intersection` of interface.

// But we cannot give `NameAndPoint` as `interface`

// Below example explain this:-
// interface NameAndPoint = Point2D & Name;
