// 🔰 Definition:
// Callback function wo function hota hai jo doosre function ko argument ke tor par diya jata hai
// aur jab woh doosra function apna kaam complete karta hai to callback ko call karta hai.
// Callbacks asynchronous programming mein bohat important hain.

// =======================
// ✅ 1. Simple Callback Example:
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Raza", sayGoodbye);
// Output:
// Hello Raza
// Goodbye!

// ✅ 2. Callback with parameters:
function processUserInput(callback) {
  const name = "Ali";
  callback(name);
}

processUserInput(function(name) {
  console.log("User name is: " + name);
});

// ✅ 3. Callback in asynchronous operation (setTimeout example):
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, message: "Data fetched" };
    callback(data);
  }, 2000);
}

fetchData(function(result) {
  console.log(result);
});

// ✅ 4. Callback Hell (Avoid this!):
// Jab callbacks nested ho jate hain to code messy ho jata hai:
function firstTask(callback) {
  setTimeout(() => {
    console.log("First task done");
    callback();
  }, 1000);
}

function secondTask(callback) {
  setTimeout(() => {
    console.log("Second task done");
    callback();
  }, 1000);
}

function thirdTask(callback) {
  setTimeout(() => {
    console.log("Third task done");
    callback();
  }, 1000);
}

firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      console.log("All tasks completed");
    });
  });
});

// ✅ Practice Questions with Solutions:

// 1️⃣ Callback jo message print kare jab timer khatam ho jaye:
function timerCallback(callback) {
  setTimeout(() => {
    callback("Timer finished!");
  }, 3000);
}

timerCallback(function(message) {
  console.log(message);
});

// 2️⃣ Do numbers add kar ke callback mein result bhejo:
function addNumbers(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

addNumbers(5, 7, function(result) {
  console.log("Sum is:", result);
});

// ✅ Real-world Example:
// Imagine ek online order process ho raha hai:
function placeOrder(orderId, callback) {
  console.log(`Order ${orderId} received.`);
  setTimeout(() => {
    console.log(`Order ${orderId} is being processed.`);
    callback(orderId);
  }, 2000);
}

function orderCompleted(orderId) {
  console.log(`Order ${orderId} completed and shipped!`);
}

placeOrder(101, orderCompleted);
