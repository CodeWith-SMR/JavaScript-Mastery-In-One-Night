// ✅ 08_loops.js – JavaScript Loops Complete Guide (Roman Urdu)

// 🔰 Definition:
// Loop ka matlab hota hai aik kaam ko bar bar repeat karna jab tak koi shart puri ho rahi ho.

// ✅ 1. for loop
// Syntax: for(initialization; condition; increment/decrement)
// Pehle aik variable banate hain (let i = 1), phir check karte hain (i <= 5),
// agar true ho to kaam karte hain aur i++ se barhate hain.
for (let i = 1; i <= 5; i++) {
  console.log("For Loop =>", i); // 1 se 5 tak numbers print honge
}

// ✅ 2. while loop
// Jab tak shart true ho, loop chalta rahega
let j = 1;
while (j <= 5) {
  console.log("While Loop =>", j);
  j++; // j barhta rahega
}

// ✅ 3. do...while loop
// Pehle kaam karega, baad mein check karega condition
let k = 1;
do {
  console.log("Do While Loop =>", k);
  k++;
} while (k <= 5);

// ✅ 4. for...of loop (Array ya string ke liye)
// Har element ko ek ek kar ke uthata hai
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log("For Of Loop =>", fruit); // Apple, Banana, Mango
}

// ✅ 5. for...in loop (Object ke liye)
// Har property ka naam (key) nikalta hai
const student = {
  name: "Raza",
  age: 20,
  city: "Karachi"
};

for (const key in student) {
  console.log(`For In Loop => ${key}: ${student[key]}`); 
  // name: Raza, age: 20, city: Karachi
}

// ✅ Loop Control Statements:

// 🔹 break => Loop ko turant rokh deta hai
for (let i = 1; i <= 10; i++) {
  if (i === 6) break; // 6 par ruk jaayega
  console.log("Break Example =>", i);
}

// 🔹 continue => Is iteration ko skip karega, agle par chala jaayega
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // 3 ko skip karega
  console.log("Continue Example =>", i);
}

// ✅ Practice Questions with Solutions:

// 1️⃣ 1 se 10 tak print karo har loop ke saath:
console.log("For Loop - 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("While Loop - 1 to 10:");
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

console.log("Do While Loop - 1 to 10:");
let b = 1;
do {
  console.log(b);
  b++;
} while (b <= 10);

// 2️⃣ 2 se 20 tak sirf even numbers print karo:
console.log("Even numbers from 2 to 20:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3️⃣ Array ke elements ko for...of se print karo:
const names = ["Ali", "Sara", "Raza"];
console.log("Printing names using for...of:");
for (const n of names) {
  console.log(n);
}

// 4️⃣ Object ke keys & values ko for...in se print karo:
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
console.log("Car details:");
for (const prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}

// 5️⃣ "I love JavaScript" 5 martaba print karo:
for (let i = 1; i <= 5; i++) {
  console.log("I love JavaScript");
}

// ✅ Real-world Example:
const shoppingCart = ["Shoes", "Shirt", "Watch"];
for (let i = 0; i < shoppingCart.length; i++) {
  console.log(`Cart Item ${i + 1}: ${shoppingCart[i]}`);
}
