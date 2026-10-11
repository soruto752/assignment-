//task 1
const collectionQueue = ["Plastic", "Glass", "Paper", "Can", "Bottle"];
const processedWaste = [];
//solutions
const cartons = ["carton"];
const metalinium = ["metal"];
const batt = "battery";
const tissue = "paper";
const eletrical = ["electricalwaste", "wood"];
collectionQueue.push(cartons);
collectionQueue.unshift(metalinium);
const firstitem = collectionQueue.shift();
processedWaste.unshift(firstitem);
const lastitem = collectionQueue.pop();
processedWaste.pop(lastitem);
collectionQueue.splice(2, 0, batt);
collectionQueue.splice[(3, 1, tissue)];
collectionQueue.splice[(1, 0, eletrical)];
console.log(collectionQueue);
console.log(processedWaste);
console.log(processedWaste.length);
console.log(collectionQueue.length);

//task 2
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
//task3
const energySources = ["Coal", "Wind", "Wrong Value", "Biomass"];
energySources.push(geothermal);
energySources.unshift(solar);
energySources.splice(2, 0, hydro);
