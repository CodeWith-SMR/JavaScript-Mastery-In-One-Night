// | Project         | Main Concepts Covered                       |
// | --------------- | ------------------------------------------- |
// | Counter App     | Variables, Functions, Increment/Decrement   |
// | Quote Generator | Arrays, Random Numbers, Math                |
// | Color Changer   | Loops, Hex Color Logic, String Manipulation |



// ✅ 1. Counter App
// 🔸 Question Ka Maqsad:
// Tumhein ek aise simple app ka logic banana hai jahan ek number increase, decrease aur reset ho sake.

// 🔸 Real-Life Example:
// Jaise tum kisi exercise tracker mein "Set Count" rakhte ho — usse barhao, kam karo ya reset karo.

// 🔸 Tumhara Goal:
// Ek variable banao count ke naam se (initial 0).
// increase() function: count ko +1 kare.
// decrease() function: count ko -1 kare.
// reset() function: count ko wapas 0 kare.
// Har action ke baad result console mein print ho.
// Initial value
let count = 0;

// Increase function
function increase() {
  count++;
  console.log("Increased Count:", count);
}

// Decrease function
function decrease() {
  count--;
  console.log("Decreased Count:", count);
}

// Reset function
function reset() {
  count = 0;
  console.log("Reset Count:", count);
}

// ✅ Test manually:
increase(); // 1
increase(); // 2
decrease(); // 1
reset();    // 0
increase(); // 1





// ✅ 2. Quote Generator
// 🔸 Question Ka Maqsad:
// Random motivational quote generate karwana (har baar alag quote mile).

// 🔸 Real-Life Example:
// Tum Instagram ya koi app kholte ho aur har baar ek naya "quote of the day" dekhte ho — woh yahi concept hai.

// 🔸 Tumhara Goal:
// Ek array banao jisme 4-5 quotes hon.
// Ek function getRandomQuote() likho jo:
// Random index choose kare.
// Us index ka quote console mein dikhaye.
// Quotes ka array
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The only way to do great work is to love what you do.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it."
];

// Random quote generator function
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log("✨ Quote of the Moment:");
  console.log(randomQuote);
}

// ✅ Test the function
generateQuote(); // Har bar random quote print hoga





// ✅ 3. Random Color Changer
// 🔸 Question Ka Maqsad:
// Random color generate karke console mein dikhana (aur agar chaaho to background change bhi kar sakte ho).

// 🔸 Real-Life Example:
// Tum CSS designer ho, aur tumhe har click par ek naya random background color test karna hai.

// 🔸 Tumhara Goal:
// Ek function banao getRandomColor() jo random hex color banaye (#A1B2C3 jesa).
// changeColor() function mein is color ko console par dikhayo.
// 🔹 Step 1: Random color generate karne ka function
function getRandomColor() {
  // Har color ke liye random 0–255 value generate karein (RGB format)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // RGB format mein color return karein
  return `rgb(${red}, ${green}, ${blue})`;
}

// 🔹 Step 2: Color change karne ka function
function changeColor() {
  const newColor = getRandomColor();
  // Document ka background color change karein
  document.body.style.backgroundColor = newColor;
  console.log("🎨 New Background Color:", newColor);
}

// ✅ Test: Function ko call karo manually
// changeColor();

// ✅ Optional: Har 3 second mein color change ho jaye automatically
// setInterval(changeColor, 3000);
