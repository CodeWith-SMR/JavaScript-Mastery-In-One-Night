// 📘 04_conditionals.js
// ✅ Topic: JavaScript Conditionals (If/Else Statements)
// 📖 Definition:
// "Conditionals aise statements hote hain jo kisi condition ke true ya false hone par alag-alag kaam karte hain."

// Aap soch samajh kar code ko kahe ke:
//   "Agar ye kaam ho gaya to ye karo... warna ye karo!"

// 🔑 Types of Conditional Statements
//1) if
//2) if...else
//3) if...else if...else
//4) switch

// 1️⃣ if Statement
// ➤ Syntax:
if (condition) {
  // ye kaam hoga agar condition true ho
}

// ✅ Example:
let age2 = 20;

if (age2 >= 18) {
  console.log("Aap vote de sakte hain");
}
// 📌 Matlab: Agar age 18 ya us se zyada ho to vote ka haq hai.



// 2️⃣ if...else Statement
// ➤ Syntax:
if (condition) {
  // ye kaam hoga agar condition true ho
}

// ✅ Example:
let age1 = 20;

if (age1 >= 18) {
  console.log("Aap vote de sakte hain");
}
// 📌 Matlab: Agar age 18 ya us se zyada ho to vote ka haq hai.



// 2️⃣ if...else Statement
// ➤ Syntax:
if (condition) {
  // agar true
} else {
  // agar false
}

// ✅ Example:
let isRaining = true;

if (isRaining) {
  console.log("Chhata le jao!");
} else {
  console.log("Maze se jao!");
}




// 3️⃣ if...else if...else Statement
// ➤ Syntax:
if (condition1) {
  // agar condition1 true
} else if (condition2) {
  // agar condition2 true
} else {
  // dono false
}

// // ✅ Example:
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else {
  console.log("Grade: B ya neeche");
}




// // 4️⃣ switch Statement
// // ➤ Syntax:
switch(expression) {
  case value1:
    // kaam
    break;
  case value2:
    // kaam
    break;
  default:
    // agar kuch bhi match na kare
}

// // ✅ Example:
let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Naya hafta shuru!");
    break;
  case "Friday":
    console.log("Jumma Mubarak!");
    break;
  default:
    console.log("Normal din.");
}



// // 🧠 Practice Time!
// // Try these questions khud se solve karne ke liye:

// // 🔸 Q1: // Agar number positive ho to "Positive Number" likho
let num = 5;
if(num > 0) {
  console.log("Positive number");
}else if (num < 0) {
  console.log("Negative number");
}else {
  console.log("Zero");
}



// // 🔸 Q2: // Agar age >= 18 ho to "Can Drive", warna "Too Young to Drive"
let age = 17;
if (age >= 18) {
  console.log("Can Drive");
} else {
  console.log("Too Young to Drive");
}

// // 🔸 Q3: // Agar number even ho to "Even Number", warna "Odd Number"
let number = 3;
if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}


// // 🔸 Q4: // Agar number 0 ya 100 se bada ho to "Out of Range", warna "In Range"
let num1 = 3;

if(num1 <= 0 || num1 >= 100) {
  condole.log("Out of Range");
}else (
  console.log("In Range")
);

// // 🔸 Q5: // Agar number 1 se 10 ke darmiyan ho to "In Range", warna "Out of Range"
let num2 = 9;
if(num2 > 1 && num2 < 10){
  console.log("In Range")
}else{
  console.log("Out of Range")
}

// // 🔸 Q6: // Agar number 1 se 100 ke darmiyan ho to  "Valid Number", warna "Invalid Number"
if(num3 > 1 && num3 < 100){
  console.log("In Range")
}else{
  console.log("Out of Range")
}


// // 🧠 Sentence for Memory:
// // “Conditionals code ko sochne aur faislay lene ke qabil banate hain.”

// // Choti Choti Tips:

// // == values compare karta hai, lekin types ignore karta hai.

// // === values aur types dono compare karta hai. (Best practice)