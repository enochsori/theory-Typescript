/**
 * Let's make a calculator 🧮
 */

// define for union type 
type Command = "add" | "sub stract" | "multiply" | " divide" | "remainder";

const calculate = (unit: Command, num1: number, num2: number) => {
  switch (unit) {
    case "add": {
      return num1 + num2;
      break;
    }
    case "substract": {
      return num1 - num2;
      break;
    }
    case "multiply": {
      return num1 * num2;
      break;
    }
    case "divide": {
      return num1 / num2;
      break;
    }
    case "remainder": {
      return num1 % num2;
      break;
    }
    default: {
      break;
    }
  }
};
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
