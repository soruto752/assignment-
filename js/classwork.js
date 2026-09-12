//1
const order = ["jollof rice", "malt", "chicken"];
console.log(order[0]);
console.log(order[order.length - 1]);
order[1] = "coke";
order.push("pepper soup");
console.log(order);
console.log(order.length);
let orderstring = order.toString;
console.log(orderstring);

//2
const stundent = ["david", "james", 15, "ss2"];
let fullname = stundent[0] + " " + stundent[1];
console.log(fullname);
console.log(stundent[3]);
console.log(stundent[4]);
stundent[3] = "16";
stundent[4] = "ss3";
console.log(stundent);
console.log(stundent.length);

//3
const product = ["Nike Air Max", 150000, "Shoes", true];
console.log(product[0]);
console.log(product[1]);
console.log(product[2]);
stundent[4] = false;
console.log(product);
let stundentstring = stundent.toString;
console.log(stundentstring);
console.log(stundent.length);

//4
const watchlist = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Avatar",
  "Gladiator",
];
watchlist[0] = "spiderman";
console.log(watchlist);
watchlist[2] = "henry danger";
console.log(watchlist[4]);
console.log(watchlist[0]);
console.log(watchlist);
console.log(watchlist.length);
console.log(watchlist.toString);

//5
const delivery = ["John", "12 Bodija Road", "ORD-1024", "Processing"];

console.log(delivery[0]);
console.log(delivery[2]);
console.log(delivery[3]);
delivery[4] = "shipped";
console.log(delivery);
console.log(delivery.toString);
console.log(delivery.length);

const riverwaste = ["plastic", "can", "bottle", "paper", "glass"];
const recyclebin = ["carton"];

const recycle = riverwaste.pop();
const waste = riverwaste.pop();

recyclebin.push(recycle);
recyclebin.push(waste);

const mixedWaste = ["Plastic", "Glass", "Paper", "Can", "Bottle"];
const recyclable = ["Carton"];

const Waste = mixedWaste.pop();
const bin = mixedWaste.pop();

recyclable.push(waste);
recyclable.push(bin);
recyclable = arr.toSpliced(0, 1, arr.at(-1)).toSpliced(-1, 1, arr[0]);
const dirt = recyclable.pop();
mixedWaste.push(dirt);
mixedWaste[1] = "metal";
console.log(mixedWaste);
console.log(recyclable);
console.log(mixedWaste.length);
console.log(recyclable.length);

//2
const mainStore = ["Tank A", "Tank B", "Tank C", "Tank D"];
const fieldStation = ["Tank X", "Tank Y"];

const liquid = fieldStation.pop();
const water = fieldStation.pop();

fieldStation.push(water);
fieldStation.push(liquid);

fieldStation = arr.toSpliced(0, 1, arr.at(-1)).toSpliced(-1, 1, arr[0]);
const station = fieldStation.pop();
mainStore.push(station);
mainStore.push("TankE");
const store = mainStore.pop();
fieldStation.push(store);
console.log(fieldStation[0]);
console.log(mainStore[0]);
//3
const nursery = ["Mango", "Orange", "Coconut", "Palm", "Guava"];
const plantingSite = ["Neem"];
const seedling1 = nursery.pop();
plantingSite.push(seedling1);
const seedling2 = nursery.pop();
plantingSite.push(seedling2);
const seedling3 = nursery.pop();
plantingSite.push(seedling3);
[arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]];
const SEED = plantingSite.pop();

nursery.push(SEED);
nursery.push(mahgohny);

const seed = nursery.pop();

plantingSite.push(seed);
console.log(plantingSite);
console.log(nursery);
console.log(nursery.length);
console.log(plantingSite.length);
