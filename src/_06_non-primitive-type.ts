// How to give type of non-primitive

// For example 'object' is complex type

function info(user: { name: string; age: number }) {
  //----- 1
  console.log("user info: ", user);
}

let user: {
  // ----- 2
  name: string;
  age: number;
} = {
  name: "Suraj", // ---------- 3
  age: 24,
};

// ---- important pt to note ------------------------------------------
// let say if user have need more feild in the future we need to update it everywhere which is
// tedious process (In above we need to change in 3 places) that why "type" come in picture of
// typescript.

info(user);
// let detail: {name: string, age: number} = info(user);

// console.log(detail);
