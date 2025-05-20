// Student Report Card Generator (Full Logic Based)
// 🧪 Requirements:
// User ka naam aur 3 subjects ke marks input lena.
// Total, Average, Grade nikalna.
// Status check karna (Pass/Fail).
// Ek function mein sari logic daalni.
// Console par result show karna.
function calculateGrade(name, m1, m2, m3) {
  let average = (m1 + m2 + m3) / 3; // ✔️ marks se average banai hai
  let grade;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  let studentStatus = average >= 50 ? "Pass" : "Fail"; // ✔️ ternary condition

  // ✅ Result show
  console.log(`Student: ${name}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${studentStatus}`);
}

// 🔽 Prompt version (Browser mein kaam karega):
let studentName = prompt("Student ka naam likhiye:");
let math = Number(prompt("Math marks:"));
let english = Number(prompt("English marks:"));
let computer = Number(prompt("Computer marks:"));

// 📞 Function call with prompt values
calculateGrade(studentName, math, english, computer); // ✅ sahi function call




// 💡 Question:
// Age Checker App
// Input: User ka age
// Output:
// Agar < 13 ho to: "You are a child."
// 13 se 19: "You are a teenager."
// 20 se 59: "You are an adult."
// 60+: "You are a senior citizen."
function ageCalculet(age) {
  if (age < 13) {
    console.log("You are a child.");
  } else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
  } else if (age >= 20 && age <= 59) {
    console.log("You are an adult.");
  } else if (age >= 60) {
    console.log("You are a senior citizen.");
  }
}

// 🔽 Input from user
let userAge1 = Number(prompt("Enter your Age:"));
ageCalculet(userAge);




// 💡 Question:
// 👉 Ek function banao checkEligibility naam ka,
// jo user ka naam aur uski age lega.
// Agar user ki age:
// 18 ya us se zyada ho, to message print kare:
// Ali is eligible to vote.
// 18 se kam ho, to print kare:
// Ali is not eligible to vote.
function checkEligibility(name, age) {
  if (age >= 18) {
    console.log(`${name} is eligible to vote.`);
  } else {
    console.log(`${name} is not eligible to vote.`);
  }
}

// User input (Browser mein)
let userName1 = prompt("Enter your name:");
let userAge2 = Number(prompt("Enter your age:"));

checkEligibility(userName, userAge);




// 💡 Question:
// 🔸 Ek function banao checkDiscount naam ka
// Jo customer ka naam aur shopping amount input le.
// Aur phir ye check kare:
// | Amount                  | Discount Message         |
// | ----------------------- | ------------------------ |
// | 5000 se zyada           | `Ali gets 30% discount.` |
// | 3000 - 5000 ke darmiyan | `Ali gets 20% discount.` |
// | 1000 - 2999 ke darmiyan | `Ali gets 10% discount.` |
// | 1000 se kam             | `Ali gets no discount.`  |
const checkDiscount = (name, amount) => {
  if (amount > 5000) {
    console.log(`${name} gets 30% discount.`)
  } else if(amount > 3000 && amount <= 5000){
    console.log(`${name} gets 20% discount.`)
  }else if(amount > 1000 && amount <= 2999) {
    console.log(`${name} gets 10% discount.`)
  }else if(amount <= 1000) {
    console.log(`${name} gets no discount.`)
  }
}

let userName2 = prompt("Enter your Name");
let userUmount = Number(prompt("Enter your amount"));
checkDiscount(userName, userUmount);




// 💼 Real-World Task: Job Application Eligibility Checker
// 📜 Requirement:
// Tum ek aise function banao jo check kare:
//1) User ka name
//2) Age
//3) Qualification
// Aur phir decide kare:
// Kya wo job ke liye eligible hai ya nahi?
// Aur kaunsi post ke liye eligible hai? (Junior, Mid-Level, Senior)
// ✅ Rules:
// | Condition                                    | Result                          |
// | -------------------------------------------- | ------------------------------- |
// | Age < 18                                     | ❌ "Not eligible for job"        |
// | Age >= 18 && Qualification == "Matric"       | ✅ "Eligible for Junior post"    |
// | Age >= 21 && Qualification == "Intermediate" | ✅ "Eligible for Mid-Level post" |
// | Age >= 25 && Qualification == "Graduate"     | ✅ "Eligible for Senior post"    |
// | Otherwise                                    | ❌ "Not eligible for any post"   |
const jobApplicationChecker = (name, age, qualification) => {
  if (age < 18) {
    console.log(`${name} ❌ Not eligible for job`);
  } else if(age >= 18 && qualification == "Matric") {
    console.log(`${name} ✅ Eligible for Junior post`)
  }else if (age >= 21 && qualification == "Intermediate" ) {
    console.log(`${name} ✅ Eligible for Mid-Level post`)
  } else if(age >= 25 && qualification == "Graduate") {
    console.log(`${name} ✅ Eligible for Senior post`)
  }else {
    console.log(`${name} ❌ Not eligible for any post`)
  }
}

let userName = prompt(`Enter your Name`);
let userAge = Number(prompt(`Enter your age`));
let userQualification = prompt(`Enter your Qualification`);
jobApplicationChecker(userName, userAge, userQualification);