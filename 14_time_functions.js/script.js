// 🔰 Definition:
// JavaScript mein time functions wo functions hain jo date aur time ke sath kaam karte hain.
// Ye functions date/time get karne, set karne, aur timers banane mein madad karte hain.

// =======================
// ✅ 1. Date Object
// Date object banane ke liye:
const now = new Date();
console.log("Current Date & Time:", now);

// Specific date banane ke liye:
const specificDate = new Date("2023-12-31T23:59:59");
console.log("Specific Date:", specificDate);

// ✅ 2. Date object ke methods:
// Get methods (date/time hasil karna):
console.log("Year:", now.getFullYear());       // Saal
console.log("Month:", now.getMonth() + 1);     // Mahina (0 se start hota hai)
console.log("Date:", now.getDate());            // Din (mahine ka)
console.log("Day:", now.getDay());              // Din (hafta ka, 0=Sunday)
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// Set methods (date/time set karna):
const d = new Date();
d.setFullYear(2025);
d.setMonth(11); // December (0-indexed)
d.setDate(25);
d.setHours(10);
d.setMinutes(30);
d.setSeconds(15);
console.log("Updated Date:", d);

// ✅ 3. Timestamp
// Unix timestamp (milliseconds since Jan 1, 1970):
const timestamp = Date.now();
console.log("Current Timestamp:", timestamp);

// ✅ 4. Timers - setTimeout and setInterval

// setTimeout => Delay ke baad ek dafa function chalata hai
setTimeout(() => {
  console.log("Ye message 2 seconds ke baad show hoga");
}, 2000); // 2000 milliseconds = 2 seconds

// setInterval => Har interval mein function chalata hai
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);
  if (count === 5) {
    clearInterval(intervalId); // 5 dafa chalne ke baad rok do
    console.log("Interval stopped");
  }
}, 1000); // Har 1 second

// ✅ Practice Questions with Solutions:

// 1️⃣ Current time ko console mein show karo har second:
setInterval(() => {
  const now = new Date();
  console.log(`Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);

// 2️⃣ Ek function likho jo 3 second baad message print kare:
function delayedMessage() {
  setTimeout(() => {
    console.log("3 seconds baad ye message show hoga");
  }, 3000);
}
delayedMessage();

// 3️⃣ Date ko "DD-MM-YYYY" format mein print karo:
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
console.log(formatDate(new Date())); // Example output: 20-05-2025

// ✅ Real-world Example:
// Simple Digital Clock on console:
setInterval(() => {
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
  console.clear();
  console.log("Digital Clock:", time);
}, 1000);
