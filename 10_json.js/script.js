// ✅ 10_json.js – JavaScript JSON Complete Guide (Roman Urdu)

// 🔰 JSON ka matlab hota hai: JavaScript Object Notation
// Yeh aik lightweight format hai data ko store aur exchange karne ke liye.
// Mostly web APIs mein data send/receive karne ke liye use hota hai.

// ✅ JSON Syntax Rules:
// 1. Data "key": "value" pairs mein hota hai
// 2. Keys hamesha double quotes "" mein hoti hain
// 3. Data string, number, object, array, boolean ya null ho sakta hai

const jsonData = '{"name": "Raza", "age": 25, "city": "Karachi"}';

// ✅ JSON ko JavaScript object mein convert karna (parse)
const jsObject = JSON.parse(jsonData);
console.log("Parsed Object:", jsObject); // { name: "Raza", age: 25, city: "Karachi" }

// ✅ JavaScript object ko JSON string mein convert karna (stringify)
const obj = {
  product: "Laptop",
  price: 80000,
  brand: "HP"
};
const jsonString = JSON.stringify(obj);
console.log("JSON String:", jsonString); // "{\"product\":\"Laptop\",\"price\":80000,\"brand\":\"HP\"}"

// ✅ Nested JSON example:
const nestedJson = '{"student": {"name": "Ali", "scores": [90, 85, 88]}}';
const nestedObj = JSON.parse(nestedJson);
console.log("Nested Student Name:", nestedObj.student.name); // Ali
console.log("Student Scores:", nestedObj.student.scores); // [90, 85, 88]

// ✅ JSON with Array of Objects:
const usersJson = '[{"name": "Sara"}, {"name": "Ahmed"}, {"name": "Usman"}]';
const users = JSON.parse(usersJson);
users.forEach((user, index) => {
  console.log(`User ${index + 1}:`, user.name);
});

// ✅ Real-World Example: API se data lena
// Jab API se data milta hai, woh aksar JSON format mein hota hai:
/*
fetch('https://api.example.com/users')
  .then(res => res.json()) // JSON parse
  .then(data => console.log(data));
*/

// ✅ JSON.stringify Extra:
// Agar aap object mein function dete hain, to woh stringify nahi hota
const person = {
  name: "Raza",
  greet: function () {
    return "Hello!";
  }
};
console.log("Function removed in stringify:", JSON.stringify(person));
// Output: {"name":"Raza"} => function hata diya jata hai

// ✅ JSON.parse Error Example:
try {
  const wrongJson = '{name: "Ali"}'; // error: keys without quotes
  JSON.parse(wrongJson); 
} catch (error) {
  console.log("❌ JSON Error:", error.message);
}

// ✅ Summary:
// JSON is best for data exchange
// Use JSON.parse to convert string to object
// Use JSON.stringify to convert object to string
