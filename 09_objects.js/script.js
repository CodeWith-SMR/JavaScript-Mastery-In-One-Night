// ✅ 09_objects.js – JavaScript Objects Complete Guide (Roman Urdu)

// 🔰 Object kya hota hai?
// JavaScript mein object aik aisa data type hota hai jo key-value pairs ko store karta hai.
// Har key ko "property" kehte hain aur uska value uska data hota hai.

// ✅ Object banane ka tareeqa:
const student = {
  name: "Muhammad Raza",
  age: 20,
  city: "Karachi",
  isEnrolled: true
};

console.log(student);

// ✅ Access karna (dot notation & bracket notation):
console.log(student.name);         // Dot notation
console.log(student["city"]);      // Bracket notation

// ✅ Properties ko update karna:
student.age = 21;                  // Update
student["city"] = "Lahore";        // Update using bracket

// ✅ New property add karna:
student.course = "JavaScript";     // Add new property

// ✅ Property delete karna:
delete student.isEnrolled;

console.log(student);

// ✅ Object ke andar function (method) bhi hota hai:
const user = {
  username: "raza123",
  greet: function () {
    console.log("Welcome, " + this.username);
  }
};
user.greet();

// ✅ Object.keys(), Object.values(), Object.entries()
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023
};

console.log(Object.keys(car));     // ["brand", "model", "year"]
console.log(Object.values(car));   // ["Toyota", "Corolla", 2023]
console.log(Object.entries(car));  // [["brand", "Toyota"], ["model", "Corolla"], ["year", 2023]]

// ✅ for...in loop for objects:
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// ✅ Nested Objects (Object ke andar object):
const employee = {
  name: "Ali",
  address: {
    city: "Karachi",
    zip: 74000
  },
  skills: ["JS", "React"]
};
console.log(employee.address.city);    // Access nested object
console.log(employee.skills[0]);       // Access nested array

// ✅ Object Destructuring:
const { name, address } = employee;
console.log(name);         // Ali
console.log(address.city); // Karachi

// ✅ Practice Questions:

// 1️⃣ Aik object banao "book" naam ka with title, author, pages.
const book = {
  title: "Learn JS",
  author: "Raza",
  pages: 250
};
console.log(`Book: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`);

// 2️⃣ "person" object mein function add karo jo "Hello, My name is XYZ" print kare:
const person = {
  name: "Sara",
  sayHello: function () {
    console.log(`Hello, My name is ${this.name}`);
  }
};
person.sayHello();

// 3️⃣ for...in loop se object ke sab properties print karo:
const laptop = {
  brand: "Dell",
  ram: "16GB",
  ssd: "512GB"
};
for (let key in laptop) {
  console.log(`${key}: ${laptop[key]}`);
}

// ✅ Real-World Example:
const cartItem = {
  id: 101,
  name: "Shoes",
  price: 2000,
  quantity: 3,
  total: function () {
    return this.price * this.quantity;
  }
};
console.log(`Total price: ${cartItem.total()} Rs.`);

// ✅ Summary:
// - Object key-value pair hota hai
// - Dot/bracket notation se access hota hai
// - for...in, Object.keys(), Object.values() se properties milti hain
// - Methods, nested structure, destructuring sab use hotay hain

// 🔥 Ye sab concepts JS mein projects banate waqt kaam aate hain!
