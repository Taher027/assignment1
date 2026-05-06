// sollution of probelm 1 ;
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

// sollution of probelm 2 ;
const reverseString = (input: string): string => {
  const reversedString = input.split("").reverse().join("");
  return reversedString;
};

const reversedString = reverseString("Hello");

// sollution of probelm 3 ;
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

// sollution of probelm 4;
