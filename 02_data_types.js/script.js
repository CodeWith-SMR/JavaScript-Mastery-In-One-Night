// 📁 02_data_types.js
// JavaScript main har value ka aik data type hota hai — yeh batata hai ke wo value kis type ki hai

// ➤ 2 Types of Data Types:
// 1. Primitive (asadgi se represent hoti hai)
// 2. Non-Primitive (objects, arrays — jo multiple data store karte hain)

// ✅ Primitive Types:
// - String ("text")
// - Number (123, 45.6)
// - Boolean (true / false)
// - Undefined (jab value assign nahi hoti)
// - Null (jan bujh ke khali rakha gaya)
// - BigInt (bari ginti)
// - Symbol (unique identifier)

// ➤ Example:
let myString = "CodeWithSMR"; // String
let myNumber = 2025;          // Number
let isLive = true;            // Boolean
let notAssigned;              // Undefined
let emptyValue = null;        // Null

// ✅ typeof Operator: yeh batata hai variable ka data type
console.log(typeof myString);      // string
console.log(typeof myNumber);     // number
console.log(typeof isLive);       // boolean
console.log(typeof notAssigned);  // undefined
console.log(typeof emptyValue);   // object ❗(null ka bug)

// ✅ Sentence:
// "typeof ka use karke aap kisi bhi value ka data type jaan saktay ho."

// ✅ Urdu translation:
// "typeof ek aisa tool hai jo batata hai ke kisi bhi variable mein kis type ka data hai."

// ✅ Practice Questions:
// Q1: Apne naam, age, isStudent boolean value, aur ek null variable declare karo
let studentName = "Muhammad Raza";
let studentAge = 21;
let isStudent = true;
let feeStatus = null;

console.log(typeof studentName); // string
console.log(typeof studentAge); // number
console.log(typeof isStudent); // boolean
console.log(typeof feeStatus); // object ❗

// ✅ Logic:
// Primitive types simple values ko represent karte hain
// typeof se humein har ek ka type pata chalta hai

// 👉 Next: 03_operators.js