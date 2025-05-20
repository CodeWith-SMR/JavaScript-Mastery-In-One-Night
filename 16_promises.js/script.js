// 🔰 Definition:
// Promise aik aisa object hai jo future mein kisi asynchronous operation ke result ko represent karta hai.
// Promise teen states mein hota hai:
// Pending (process chal rahi hoti hai),
// Fulfilled (operation successful ho gaya),
// Rejected (operation fail ho gaya).

// =======================
// ✅ 1. Basic Promise Example:

const myPromise = new Promise((resolve, reject) => {
  let success = true; // condition ko simulate kar rahe hain
  if(success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((message) => {
    console.log("Then:", message);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });

// ✅ 2. Promise with asynchronous task (setTimeout):

const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, message: "Data received" };
    resolve(data);
  }, 2000);
});

asyncPromise
  .then((result) => {
    console.log("Async data:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// ✅ 3. Promise chaining:
const multiplyByTwo = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num * 2);
  });
};

multiplyByTwo(5)
  .then((result) => {
    console.log("Step 1:", result); // 10
    return multiplyByTwo(result);
  })
  .then((result) => {
    console.log("Step 2:", result); // 20
  })
  .catch((err) => {
    console.log("Error in chain:", err);
  });

// ✅ 4. Promise.all - multiple promises ko ek sath handle karna:
const p1 = Promise.resolve(3);
const p2 = new Promise((resolve) => setTimeout(() => resolve(42), 1000));
const p3 = 7;

Promise.all([p1, p2, p3]).then((values) => {
  console.log("Promise.all results:", values); // [3, 42, 7]
});

// ✅ 5. Promise.reject example:
const failPromise = Promise.reject("Something went wrong!");

failPromise
  .then(() => {
    console.log("This won't run");
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });

// ✅ Practice Questions with Solutions:

// 1️⃣ Promise banaiye jo 3 seconds baad resolve ho aur message return kare:
function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 seconds completed!");
    }, 3000);
  });
}

waitThreeSeconds().then((msg) => console.log(msg));

// 2️⃣ Promise banaiye jo do numbers ko add kare aur result de:
function addNumbersPromise(a, b) {
  return new Promise((resolve) => {
    const sum = a + b;
    resolve(sum);
  });
}

addNumbersPromise(10, 20).then((result) => {
  console.log("Sum:", result);
});

// ✅ Real-world Example:
// User login simulation with Promise:
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === "admin" && password === "1234") {
        resolve("Login successful!");
      } else {
        reject("Invalid credentials!");
      }
    }, 2000);
  });
}

loginUser("admin", "1234")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

loginUser("user", "wrongpass")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
