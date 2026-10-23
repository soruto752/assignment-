console.log(`task1`);

const collectionQueue = ["Plastic", "Glass", "Paper", "Can", "Bottle"];
const processedWaste = [];
//solutions
const cartons = "carton";
const metalinium = "metal";
const batt = "battery";
const tissue = "paper";
const eletrical = "electricalwaste,wood";
collectionQueue.push(cartons);

console.log(`New value after adding cartons to collectionqueue:`);
console.log(collectionQueue);

collectionQueue.unshift(metalinium);

console.log(`New value after unshifting metalinum to collectionqueue:`);
console.log(collectionQueue);

const firstitem = collectionQueue.shift();
processedWaste.unshift(firstitem);

console.log(`New result after moving the first element to processed value`);
console.log(collectionQueue);
console.log(`New result after moving the first element of collectionqueue`);
console.log(processedWaste);

const lastitem = collectionQueue.pop();
processedWaste.push(lastitem);

console.log(`New result after moving the last elemnt of collectionqueue`);
console.log(collectionQueue);
console.log(`result after adding another Element to collectionqueue`);
console.log(processedWaste);

collectionQueue.splice(2, 0, batt);
collectionQueue.splice[(3, 1, tissue)];
collectionQueue.splice[(1, 0, eletrical)];

console.log(`the final results of everything done`);
console.log(collectionQueue);
console.log(processedWaste);
console.log(processedWaste.length);
console.log(collectionQueue.length);

console.log(`task 2`);

const waiting = ["Tunde", "Ada", "David", "Sarah", "John"];
const bus = ["Grace"];
const people = ["chidi", "amina", "micheal"];
waiting.push(people);
waiting.push(people);
const waiter = waiting.pop();
bus.push(waiter);
const beginner = waiting.shift();
bus.unshift(beginner);
waiting.splice(2, 0, people);
const sarah = waiting.pop();
bus.push(sarah);
console.log(bus);
console.log(waiting);
