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


// 7. splice()
// Kya karta hai?
// Array mein se kisi jagah se elements ko remove ya insert karta hai.

// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

// Example:
let arr = ["a", "b", "c", "d"];
// 1st arg = index 1 se start karo,
// 2nd arg = 2 elements delete karo,
// 3rd and 4th args = "x" aur "y" insert karo
arr.splice(1, 2, "x", "y");
console.log(arr); // ["a", "x", "y", "d"]



// 8. slice()
// Kya karta hai?
// Array ke ek part ko naya array bana ke return karta hai. Original array change nahi hota.
// Syntax: array.slice(startIndex, endIndex)
// EndIndex wala element include nahi hota.

// Example:
let arr = [10, 20, 30, 40, 50];
let newArr = arr.slice(1, 4);
console.log(newArr);  // [20, 30, 40]
console.log(arr);     // original array unchanged


// 9. concat()
// Kya karta hai?
// Do ya zyada arrays ko jod kar ek naya array banata hai. Original arrays change nahi hotay.

// Example:
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
