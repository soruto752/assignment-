const collectionPoints = [
  ["Plastic", "Glass", "Paper"],
  ["Metal", "Plastic", "Battery"],
  ["Glass", "Organic", "Paper"],
];
const recyclableWaste = ["Cardboard"];
const hazardousWaste = [];

//solution
const arraychecker = Array.isArray(collectionPoints);
//is to checkif it is an array or not
console.log("this wiil check if it is actually an array");
console.log(arraychecker);
//this is to join all arrays in collectivedata
const collectiondata = collectionPoints.flat();
console.log("this is taking in out all the arrays in the array");
console.log(collectiondata);
//this is to find the first item
const firstitem = collectiondata.unshift();
recyclableWaste.shift(firstitem);
//this is to find the last item
const lastitem = collectiondata.pop();
recyclableWaste.push(lastitem);
console.log(
  "this will move the first and the last of collectiondata to recyclablewaste",
);
console.log(recyclableWaste);
console.log(collectiondata);
