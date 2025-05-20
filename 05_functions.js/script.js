// 📘 05_functions.js
// ✅ Topic: JavaScript Functions

// 📖 Definition:
//      Function JavaScript ka ek block of code hota hai jo aap bar bar chala sakte hain bina baar baar likhe.

// 📌 Ek function aap ke liye kaam ko "group" karta hai — jaise ek machine jo kaam karti hai jab aap usay "start" karte hain.

// 🧠 Function yaad rakhne ka sentence:
//    “Function woh kaam hai jo aapko baar baar chahiye, lekin sirf ek baar likhna chahtay hain.”

// 📌 Types of Functions
//1) Function Declaration
//2) Function Expression
//3) Arrow Function

// 1️⃣ Function Declaration
// ➤ Syntax:
function greet() {
  console.log("Hello, Raza Bhai!");
}
// ➤ Call (Chalana):
greet();


// 2️⃣ Function with Parameters
// ➤ Syntax:
function greetUser(name) {
  console.log("Hello, " + name);
}
// ➤ Call (Chalana):
greetUser("Muhammad Raza"); // Output: Hello, Muhammad Raza


// 3️⃣ Function with Return
// ➤ Syntax:
function add(a, b) {
  return a + b;
}
// ➤ Call (Chalana):
let result = add(5, 3); // result = 8


// 4️⃣ Function Expression
// ➤ Syntax:
const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 2)); // 8


// 5️⃣ Arrow Function (New Style)
// ➤ Syntax:
const divide = (a, b) => {
  return a / b;
};
// ➤ Short Form (if only one line):
const square = n => n * n;



// // 🔥 Practice Questions
// // 1️⃣ Function to greet user
// // Aapko ek aisi function banana hai jo kisi bhi naam ko input le aur usay greet kare.
function greet(name){
  console.log("Hello," + name)
}
greet("Raza Bhai");


// 2️⃣ Function to calculate area of circle
// areaCircle(radius) → π × r × r


// 3️⃣ Function to convert Celsius to Fahrenheit
// celsiusToFahrenheit(0) → 32


// 4️⃣ Function to check even or odd
// isEven(4) → true
// isEven(5) → false


// 5️⃣ Function to find max of two numbers
// max(10, 5) → 10


// 6️⃣ Function to check if user can vote (age >= 18)
// canVote(19) → "Yes"
// canVote(15) → "No"


// // ⚡ Bonus Practice
// // ➤ Make a calculator function with 3 parameters:
// // calculate(num1, num2, operator)
// Ye ek smart function hai jo:
// Agar operator "+" ho to num1 + num2 kare
// Agar "-" ho to num1 - num2 kare
// Agar "*" ho to num1 * num2 kare
// Agar "/" ho to num1 / num2 kare
// // Example: calculate(4, 2, "+") → 6
const calculate = (num1, num2 , operator) => {
  if(operator === "+"){
    return((num1 + num2))
  }else if(operator === "-"){
    return(num1 - num2)
  }else if (operator === "*"){
    return(num1 * num2)
  }else if (operator === "/"){
    return(num1 / num2)
  }
}

console.log(calculate(6, 5, "+"))


