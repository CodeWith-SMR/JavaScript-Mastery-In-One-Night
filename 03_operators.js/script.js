// 📁 03_operators.js
// Operators JavaScript ke tools hain jin se hum values ke saath operations karte hain

// ✅ 1. Arithmetic Operators:
// ➤ + (add), - (subtract), * (multiply), / (divide), % (modulus)
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1 (remainder)

// ✅ 2. Assignment Operators:
// ➤ =, +=, -=, *=, /=
let x = 5;
x += 3; // x = x + 3 = 8
x *= 2; // x = x * 2 = 16
console.log(x); // 16

// ✅ 3. Comparison Operators:
// ➤ == (loose equal), === (strict equal), !=, !==, >, <, >=, <=
let num1 = 10;
let num2 = "10";

console.log(num1 == num2);  // true (only value check)
console.log(num1 === num2); // false (value + type check)
console.log(num1 != num2);  // false
console.log(num1 !== num2); // true

// ✅ 4. Logical Operators:
// ➤ && (AND), || (OR), ! (NOT)
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false

// ✅ Sentence:
// "Operators aise tools hain jo do values ke beech mein operation perform karte hain."

// ✅ Urdu Translation:
// "JavaScript ke andar operators kaam karte hain do ya zyada values par — jese plus, minus, aur compare karna."

// ✅ Practice Questions:
// Q1: Do numbers ka sum, difference, product, aur remainder nikaal kar print karo
let n1 = 15;
let n2 = 4;

console.log("Sum:", n1 + n2);
console.log("Difference:", n1 - n2);
console.log("Product:", n1 * n2);
console.log("Remainder:", n1 % n2);

// ✅ Logic:
// Operators ke bina JavaScript kuch bhi nahi kar sakti — ye basic tools hain har logic ke liye

// 🔧 JavaScript Operators Summary (Urdu Style)
// 1️⃣ Arithmetic Operators (جمع تفریق والے)
// +, -, *, /, % ➝ Math wale kaam ke liye

// 2️⃣ Assignment Operators (value assign karne ke liye)
// =, +=, -=, *=, /=

// 3️⃣ Comparison Operators (muqabla karne ke liye)
// ==, ===, !=, !==, >, <, >=, <=

// 4️⃣ Logical Operators (true ya false ke logic ke liye)
// &&, ||, !

// ✅ Sentence:
// "Operators aise tools hain jo do values ke beech mein operation perform karte hain."


// 🔥 JS Operators Full Mastery Practice 🔥
// 🔢 Practice Set 1: Arithmetic Operators

// Q1: Do numbers ka sum nikaalo
let y = 20;
let z = 6;
console.log(y + z); // 26

// Q2: Divide 100 by 4 and find quotient
let c = 100;
console.log(100 / 4); // 25

// Q3: Multiply 5, 10, and 2
let d = 5;
let e = 10;
let f = 2;
console.log(d * e * f); // 100

// Q4: 10 ko 3 se divide karo aur remainder print karo
let g = 10;
let h = 3;
console.log(10 % 3); // 1

// Q5: Ek formula banao: (a + b) * i
let i = 5;
let j = 3;
let k = 2;
console.log((i+ j) * k); // Output: 1630

// Q6: Area of rectangle (length × width)
let lenght = 10;
let width = 5;
console.log(lenght * width); // Output: 50


// 🧮 2. Assignment Operators Practice

// Q1: x = 10, x += 5 ka result kya hoga?
let x1 = 10;
let y1 = 5;
console.log(x1 += y1); // 15

// Q2: y = 20, y *= 2, y -= 5
let y2 = 20;
y2 *= 2; // 40
y2 -= 5; // 35
console.log(y2); // 35

// Q3: a = 50, a /= 5, then a += 10
let a1 = 50;
a1 /= 5;
a1 += 10;
console.log(a1); // 20


// ⚖️ 3. Comparison Operators Practice

// Q1: 10 == '10' ka result kya hoga?
let a2 = 10;
let b2 = '10';
let c2 = a2 == b2; // true (loose equality)
console.log(c2); // true


// Q2: 10 === '10' ka result kya hoga?
let a3 = 10;
let b3 = '10';
let c3 = a3 === b3; // false (strict equality)
console.log(c3); // false

// Q3: 25 > 20 ?
let a4 = 25;
let b4 = 20;
let c4 = a4 > b4; // true
console.log(c4); // true

// Q4: 15 <= 15 ?
let a5 = 15 <= 15; // true
console.log(a5); // true

// Q5: "apple" == "Apple" ?
let a6 = "apple" == "Apple"; // false (case-sensitive)

// Q6: let score = 90; score !== '90' ?
let score = 90;
console.log(score !== '90'); // true (different types)


// 🔁 4. Logical Operators Practice

// Q1: age = 19, hasID = true, kya wo vote de sakta hai?
let age1 = 19;
let hasId = false;
let canVote =age1 >= 18 || hasId; // true
console.log(canVote); // true

// Q2: isLoggedIn = false, isAdmin = true, kya wo admin hai?
let isLoggedIn = false;
let isAdmin = true;
let isAddminUser = isLoggedIn || isAdmin; // true
console.log(isAddminUser); // true

// Q3: !true ka result?clg
console.log(!true); // false

// Q4: !false ka result?
console.log(!false); // true

// Q5: temperature = 25, isRaining = false => kya picnic ho sakti hai?
let temperature = 25;
let isRaining = false;
let canpicnic = temperature >= 20 && !isRaining; // true
console.log(canpicnic); // true

// Q6: userLoggedIn = true, hasPremium = false, kya wo premium user hai?
let userLoggedIn = true;
let hasPremium = false;
let inPremiumUser = userLoggedIn && hasPremium; // false
console.log(inPremiumUser); // false


// 🎯 Bonus: Mix Logic Challenges (Masti + Mastery)

// Q1: Aap ke paas x = 5 hai. Pehle usay 2 se multiply karo, phir usme 10 add karo, phir 3 se divide karo
let x2 = 5;
x2 = ((x2 * 2) + 10) / 3;
console.log(x2); // 6.666666666666667

// Q2: user ki age 18 se zyada hai aur uske paas CNIC hai, to print karo “true”
let user = 21;
let CNIC = true;
let isAllowed = user > 18 && CNIC;
console.log(isAllowed);

// Q3: do numbers a = 15, b = 30 agar a chota hai b se to “Valid” warna “Invalid”
let a7 = 15;
let b7 = 30;
let result = a7 < b7 ? "Valid" : "Invalid";
console.log(result); // Valid

// 🔚 Final Sentence:
// “Jo banda operators ko ache se seekh leta hai, wo kisi bhi logic ko likhne ka master ban jata hai!”

// ✅ Practice Set 2: Assignment Operators

// 👉 Next: 04_conditionals.js
