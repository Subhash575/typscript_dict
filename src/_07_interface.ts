// Interface and type help in reducing the redundancy.

interface address {
  state: string;
  city: string;
  pincode: number;
}

function info(personAddress: address) {
  console.log("person address", personAddress);
}

let personAddress = {
  state: "Haryana",
  city: "Hisar",
  pincode: 125001,
};

info(personAddress);

// question-1:- simple example of interface.
interface information {
  name: string;
  email: string;
  age: number;
}

function isLegal(detail: information) {
  if (detail.age >= 18) {
    return true;
  } else {
    return false;
  }
}

let detail = {
  name: "Suraj",
  email: "suraj123@gmail.com",
  age: 19,
};

console.log(isLegal(detail));
