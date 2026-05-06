// sollution of probelm 1 ;
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

const reverseString = (input: string): string => {
  const newReversedstring = input.split("").reverse().join("");
  return `"${newReversedstring}"`;
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
const getProperty = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] => {
  return obj[key];
};

const userName = getProperty({ id: 1, name: "Taher", age: 30 }, "name");

//sollution of problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return { ...book, isRead: true };
};
const myBook = toggleReadStatus({
  title: "Ts",
  author: "Taher",
  publishedYear: 2026,
});

//sollution of problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`;
  }
}

const student = new Student("Alice", 20, "A");
