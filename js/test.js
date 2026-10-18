const collectionPoints = [
  ["Plastic", "Glass", "Paper"],
  ["Metal", "Plastic", "Battery"],
  ["Glass", "Organic", "Paper"],
];
const recyclableWaste = ["Cardboard"];
const hazardousWaste = [];

//solution
const arraychecker = Array.isArray(collectionPoints);
console.log("this wiil check if it is actually an array");
console.log(arraychecker);
const collectiondata = collectionPoints.flat();
console.log("this is taking in out all the arrays in the array");
console.log(collectiondata);
const firstitem = collectiondata.unshift();
recyclableWaste.shift(firstitem);
const lastitem = collectiondata.pop();
recyclableWaste.push(lastitem);
console.log(
  "this will move the first and the last of collectiondata to recyclablewaste",
);
console.log(recyclableWaste);
console.log(collectiondata);
