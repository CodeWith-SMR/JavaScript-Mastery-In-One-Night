// JavaScript Arrays – Complete Methods Guide with Detailed Explanation

// Array kya hota hai?
// Array aik aisi list hai jisme multiple values ko ek sath store kar sakte hain.

let fruits = ["apple", "banana", "mango"];
console.log(fruits); // ["apple", "banana", "mango"]

// Array indexing zero se shuru hoti hai:
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"


// 1. push()
// Kya karta hai?
// Array ke end (aakhir) mein ek ya zyada elements add karta hai.
// Return value: Array ki new length (nayi length) deta hai.

// Example:
let arr = [1, 2, 3];
let newLength = arr.push(4, 5);
console.log(arr);        // [1, 2, 3, 4, 5]
console.log(newLength);  // 5


// 2. pop()
// Kya karta hai?
// Array ke last element ko remove karta hai aur us element ko return karta hai.
// Return value: Jo element remove hua hai.

// Example:
let arr1 = [1, 2, 3, 4];
let removed = arr.pop();
console.log(arr);     // [1, 2, 3]
console.log(removed); // 4


// 3. unshift()
// Kya karta hai?
// Array ke start (shuruat) mein ek ya zyada elements add karta hai.
// Return value: New length deta hai.

// Example:
let arr = [3, 4];
let newLength = arr.unshift(1, 2);
console.log(arr);        // [1, 2, 3, 4]
console.log(newLength);  // 4


// 4. shift()
// Kya karta hai?
// Array ke first element ko remove karta hai aur usko return karta hai.
// Return value: Jo element remove hua.

// Example:
let arr = [1, 2, 3];
let removed = arr.shift();
console.log(arr);     // [2, 3]
console.log(removed); // 1


// 5. includes()
// Kya karta hai?
// Check karta hai ke koi element array mein maujood hai ya nahi.
// Return value: true ya false.

// Example:
let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grapes")); // false


// 6. indexOf()
// Kya karta hai?
// Array mein kisi element ka pehla index batata hai. Agar element na mile to -1 deta hai.

// Example:
let fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits.indexOf("banana")); // 1 (pehla banana ka index)
console.log(fruits.indexOf("grapes")); // -1
