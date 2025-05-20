// 🔰 Definition:
// Async/Await JavaScript mein promises ke saath kaam karne ka modern aur readable tareeqa hai.
// 'async' function promise return karta hai.
// 'await' kisi promise ke fulfill hone ka intezaar karta hai.

// =======================
// ✅ 1. Basic async function

async function greet() {
  return "Hello, Async!";
}

greet().then((msg) => console.log("Message:", msg)); // Output: Hello, Async!

// ✅ 2. await ke saath promise ka result lena:

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received after 2 seconds");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  const result = await fetchData(); // Jab tak promise resolve nahi hota, wait karega
  console.log("Result:", result);
}

getData();

// ✅ 3. Multiple awaits:

function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 done");
    }, 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2 done");
    }, 1000);
  });
}

async function runSteps() {
  const res1 = await stepOne();
  console.log(res1);

  const res2 = await stepTwo();
  console.log(res2);
}

runSteps();

// ✅ 4. try...catch ke saath error handle karna

function getUserData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "admin") {
        resolve("User data found!");
      } else {
        reject("User not found!");
      }
    }, 1500);
  });
}

async function fetchUser() {
  try {
    const data = await getUserData("admin");
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUser();

// ✅ 5. async function with return value:

async function multiplyAsync(a, b) {
  return a * b;
}

multiplyAsync(5, 4).then((result) => console.log("Multiply:", result)); // 20

// ✅ Practice Questions with Solutions:

// 1️⃣ async function likho jo 2s baad "Welcome!" return kare

function delayWelcome() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Welcome!");
    }, 2000);
  });
}

async function showWelcome() {
  const message = await delayWelcome();
  console.log(message);
}
showWelcome();

// 2️⃣ 3 promises ko await karke result print karo

function fetchOne() {
  return new Promise((res) => setTimeout(() => res("One"), 1000));
}
function fetchTwo() {
  return new Promise((res) => setTimeout(() => res("Two"), 1000));
}
function fetchThree() {
  return new Promise((res) => setTimeout(() => res("Three"), 1000));
}

async function fetchAll() {
  const one = await fetchOne();
  console.log(one);
  const two = await fetchTwo();
  console.log(two);
  const three = await fetchThree();
  console.log(three);
}
fetchAll();

// ✅ Real-world Example: User login system

function simulateLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "pass") {
        resolve("Login successful!");
      } else {
        reject("Login failed!");
      }
    }, 2000);
  });
}

async function loginHandler() {
  try {
    const result = await simulateLogin("user", "pass");
    console.log(result);
  } catch (error) {
    console.log("Login Error:", error);
  }
}

loginHandler();
