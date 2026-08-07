const cars = ["saab", "volvo", "bmw"];
let car = cars[1];
cars[1] = "toyato";
console.log(cars);
//1
const stundent = ["ireoluwa", "9", "css", "false"];
console.log("stundent");
//2
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[1] = "pineapple";
console.log(fruits);
let fruitstring = fruits.toString;
console.log("fruitstring");
//3
const myData = [
  "Hello World",
  42,
  true,
  { name: "Alex", age: 30 },
  ["apple", "banana", "cherry"],
];
console.log(myData);
//4
let cars = [];

cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Tesla";
cars[3] = "BMW";

cars[2] = "Mercedes";

console.log("First element:", cars[0]);
console.log("Last element:", cars[cars.length - 1]);
console.log("Complete array:", cars);

let movies = ["Inception", "The Matrix", "Interstellar", "Gladiator", "Avatar"];

console.log("First movie:", movies[0]);
console.log("Third movie:", movies[2]);
console.log("Last movie:", movies[movies.length - 1]);

movies[1] = "The Dark Knight";

console.log("Total number of movies:", movies.length);

let moviesString = movies.tostring;
console.log(" moviesString");
