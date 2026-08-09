//1
const student = ["ireoluwa", 9, "css", true];

console.log(student);

console.log(student[1]);

console.log(student[student.length - 1]);

console.log(student.length);

//2
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[1] = "Pineapple";

console.log(fruits);

const fruitString = fruits.toString();

console.log(fruitString);

//3
const myData = [
  "Hello World",
  42,
  true,
  { name: "Alex", age: 30 },
  ["apple", "banana", "cherry"],
];

console.log("Entire array:", myData);
console.log("The object:", myData[3]);
console.log("The nested array:", myData[4]);
console.log("Number of elements:", myData.length);

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
