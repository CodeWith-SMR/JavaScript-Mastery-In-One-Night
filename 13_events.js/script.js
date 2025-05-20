// 🔰 Definition:
// Event ka matlab hota hai koi bhi action jo user ya browser karta hai, jaise click, hover, scroll, key press, etc.
// JavaScript mein hum event listeners lagate hain takay hum ye actions detect kar saken aur uske mutabiq response de saken.

// ✅ 1. Event Listener lagana (addEventListener)
// Syntax: element.addEventListener("eventName", callbackFunction);

// Example: Button pe click event lagana
const btn = document.getElementById("myButton");
btn.addEventListener("click", function() {
  console.log("Button was clicked!");
});

// ✅ 2. Different types of events:
// - click: Jab element pe click hota hai
// - mouseover: Jab mouse element ke upar aata hai
// - mouseout: Jab mouse element se nikalta hai
// - keydown: Jab keyboard key dabai jati hai
// - keyup: Jab keyboard key chhodi jati hai
// - input: Jab user input field mein kuch type karta hai
// - submit: Form submit hone par

// ✅ 3. Event object
// Har event ke sath ek event object aata hai jisme event ki details hoti hain
btn.addEventListener("click", function(event) {
  console.log("Clicked element:", event.target);
  console.log("Event type:", event.type);
});

// ✅ 4. Removing event listeners
// removeEventListener ka use hota hai agar hum kisi event ko hatana chahein
function handleClick() {
  console.log("Button clicked!");
}
btn.addEventListener("click", handleClick);

// Kuch der baad remove karna ho:
btn.removeEventListener("click", handleClick);

// ✅ 5. Event delegation
// Agar bohot sare elements pe same event lagana ho, to parent element pe event laga ke 
// event bubbling ke zariye handle kar sakte hain

const list = document.getElementById("itemList");
list.addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});

// ✅ Practice Questions with Solutions:

// 1️⃣ Button click par alert dikhaye:
const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", function() {
  alert("Button clicked!");
});

// 2️⃣ Input field mein type karte waqt console mein typed text dikhaye:
const inputField = document.getElementById("inputField");
inputField.addEventListener("input", function(e) {
  console.log("Typed:", e.target.value);
});

// 3️⃣ Form submit hone par default reload rok kar message dikhaye:
const form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();  // Page reload rokta hai
  console.log("Form submitted!");
});

// ✅ Real-world example:
// Dark mode toggle button
const toggleBtn = document.getElementById("toggleDarkMode");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  console.log("Dark mode toggled");
});
