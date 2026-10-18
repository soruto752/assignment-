const collectionPoints = [
  ["Plastic", "Glass", "Paper"],
  ["Metal", "Plastic", "Battery"],
  ["Glass", "Organic", "Paper"],
];
const recyclableWaste = ["Cardboard"];
const hazardousWaste = [];

//solution
const arraychecker = Array.isArray(collectionPoints);
console.log();
console.log();
const collectiondata = collectionPoints.flat();
console.log();
console.log();
const firstitem = collectiondata.unshift();
recyclableWaste.shift(firstitem);
const lastitem = collectiondata.pop();
recyclableWaste.push(lastitem);
