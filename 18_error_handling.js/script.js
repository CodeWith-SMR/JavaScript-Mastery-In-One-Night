// ✅ 16_error_handling.js – JavaScript Error Handling (Roman Urdu)

// 🔰 Definition:
// Jab code run hota hai aur koi galti (error) aati hai, to program crash ho sakta hai.
// Error handling ka matlab hai ke un galtiyon ko pakar lena aur handle karna taake app crash na ho.

// ===============================
// ✅ 1. try...catch

try {
  // Yahan risky code likhte hain
  let a = 10;
  let b = a + undeclaredVariable; // yeh error dega
  console.log(b);
} catch (error) {
  // Agar koi error aaya to yeh block chalega
  console.log("❌ Error aya hai:", error.message);
}

// ✅ 2. finally block
// Yeh hamesha chalega chahe error aaye ya na aaye

try {
  let x = 5;
  console.log("Value of x:", x);
} catch (e) {
  console.log("Error:", e.message);
} finally {
  console.log("✅ Finally block hamesha chalega");
}

// ✅ 3. Custom Error throw karna

function divide(a, b) {
  if (b === 0) {
    throw new Error("Zero se divide nahi ho sakta");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Result:", result);
} catch (err) {
  console.log("❌ Custom Error:", err.message);
}

// ✅ 4. SyntaxError, ReferenceError, TypeError examples

// ReferenceError:
try {
  console.log(notDeclaredVar); // variable define nahi kia
} catch (err) {
  console.log("❌ ReferenceError:", err.message);
}

// TypeError:
try {
  null.f(); // null par function call karna galat hai
} catch (err) {
  console.log("❌ TypeError:", err.message);
}

// SyntaxError can't be caught during runtime in code

// ✅ 5. Practice Questions with Solutions:

// 1️⃣ Aik array ka 5th index access karo, agar undefined ho to error do

function accessArray(arr) {
  try {
    if (arr[4] === undefined) {
      throw new Error("5th element nahi mila");
    }
    console.log("Element:", arr[4]);
  } catch (e) {
    console.log("❌ Array Error:", e.message);
  }
}

accessArray([1, 2, 3]);

// 2️⃣ Aik function banaye jo string le aur agar string nahi ho to error throw kare

function printUpperCase(input) {
  try {
    if (typeof input !== "string") {
      throw new TypeError("Sirf string hi allowed hai");
    }
    console.log(input.toUpperCase());
  } catch (e) {
    console.log("❌ Type Check Error:", e.message);
  }
}

printUpperCase("hello");
printUpperCase(123);

// ✅ Real-world Example: API call fail hone par message show karo

async function fetchUserData() {
  try {
    // fake fetch simulation
    throw new Error("Network error!");
  } catch (e) {
    console.log("❌ API Error:", e.message);
  } finally {
    console.log("📡 API call attempt finished");
  }
}

fetchUserData();
