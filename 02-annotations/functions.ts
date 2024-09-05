// For arrow function
const add = (a: number, b: number): number => {
  return a + b;
};
// For regular function
function divide(a: number, b: number): number {
  return a / b;
}
// For ananymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// never return type is special
const throwError = (message: string): never => {
  throw new Error(message);
};
