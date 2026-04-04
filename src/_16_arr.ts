// Here we learn about array in typescript.

// Example:- Given an array of positive integers as input, return the maximum value in the array

function maxSum(nums: number[]) {
  let maxVal = -34;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > maxVal) {
      maxVal = nums[i]!;
      // Here you can see we use the not null assertion because typescript not believe on the index
    }
  }
  return maxVal;
}

maxSum([3, 9, 2]);

// ---- Array in Interface --------

interface Address {
  city: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address[];

  // OR

  /*
    address: {
        city: string;
        pincode: number;
    }[];
    */
}
