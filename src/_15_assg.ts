// assgniment:- Create two types called User and Admin,
// Create a function that takes either a user or admin as an input and return a string saying
//  "Welecome, [name]"

type user = {
  name: string;
  user_id: number;
};

type admin = {
  name: string;
  admin_id: number;
};

type People = user | admin;

function greeting(people: People) {
  // In case of union we can only able to access the common property only.
  // that why `people.name` is accessable but `people.user_id`, `people.admin_id` is not accessable.
  console.log("Welcome, [", people.name, "]");
}

let people: People = {
  name: "Ramesh",
  user_id: 1,
  admin_id: 2,
};

greeting(people);
