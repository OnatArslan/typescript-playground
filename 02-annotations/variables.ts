// Primitives -------------------------------

// This will give an error because of type annotations
// apples = 'hey';

let speed: string = '100';

let hasName: boolean = true;

let nothing: undefined = undefined;

// Arrays -------------------------------------
let colors: string[] = [`red`, `green`, `blue`];

let myNumbers: number[] = [1, 2, 3, 4, 5, 6];

let truths: boolean[] = [true, true, false];

// Classes ----------------------------------
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
