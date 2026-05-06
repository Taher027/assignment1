// Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.
// // Sample Input 1:
// checkType("Hello");

// // Sample Output 1:
// "String";

// // Sample Input 2:
// checkType(42);

// // Sample Output 2:
// "Number";

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  } else {
    return "Unknown type";
  }
};
const type1 = checkType("Hello");
const type2 = checkType(42);
console.log("type1", type1);
console.log("type2", type2);
