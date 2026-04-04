// Example of interface and types.

// Interface Name always start with capital letter.
// To make any field optional in typescript we use the:-> ?:

interface User {
  name: string;
  age: number;
  address?: {
    country: string;
    city: string;
    pincode: number;
  };
}

let user: User = {
  name: "Ramesh",
  age: 25,
  // Remember:- Address is the optional field that why we don't getting type error here.
};

let anotherUser: User = {
  name: "suresh",
  age: 10,
  address: {
    country: "India",
    city: "Hisar",
    pincode: 125001,
  },
  // Remember:- address feild it optional but it is not partial optional means if we define address
  // Than we need to definately define the all it key value pair. Otherwise if we also made it
  // optional than internally we need to make this optional like this:-
  /* 
address: {
    country ?: "India",
    city ?: "Hisar",
    pincode ?: 125001,
  }
*/
};

function ageChecker(user: User) {
  if (user.age >= 18) {
    console.log("adult");
  } else {
    console.log("minor");
  }
}

ageChecker(user);
ageChecker(anotherUser);
