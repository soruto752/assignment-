//1
const order = ["jollof rice,malt,chicken"];
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
