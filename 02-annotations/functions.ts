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

const forecast = {
  date: new Date(),
  weather: `sunny`,
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// Objects
const profile = {
  name: `alex`,
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
