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

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use type annotations

// 1) Function that returns any type
const json = `{
"x":10,"y":20
}`;

const coordinates: { X: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initalizate it later
let words = [`dog`, `cat`, `pencil`, `mama`, `monkey`];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === `cat`) {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
