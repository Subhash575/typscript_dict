// Here we learn about how we remove repetition using interface or we can say one interface using
// other interface.

interface Address {
  country: "string";
  city: "string";
  pincode: number;
}

interface User {
  name: "string";
  age: number;
  address: Address;
}

interface Office {
  address: Address;
}
