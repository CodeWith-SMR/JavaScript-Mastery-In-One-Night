// ✅ 12_dom.js – JavaScript DOM (Document Object Model) Complete Guide – Roman Urdu

// 🔰 DOM kya hota hai?
// DOM ka matlab hai Document Object Model.
// Jab browser HTML file ko read karta hai to uska ek tree structure banata hai jisko DOM kehte hain.
// Hum JavaScript se isi DOM ko access karke HTML ko change, update ya manipulate karte hain.

// ✅ 1. Accessing Elements – Elements ko dhoondhna:

// 🔹 getElementById – aik specific ID se element nikaalna
const heading = document.getElementById("main-heading");
console.log("getElementById:", heading);

// 🔹 getElementsByClassName – ek class ke tamam elements nikaalna (HTMLCollection milta hai)
const items = document.getElementsByClassName("list-item");
console.log("getElementsByClassName:", items);

// 🔹 getElementsByTagName – ek tag ke tamam elements lena (jaise <li>, <p> etc)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// 🔹 querySelector – pehla element jo match kare selector se (CSS selector jaisa likhtay hain)
const container = document.querySelector(".container");
console.log("querySelector:", container);

// 🔹 querySelectorAll – tamam matching elements (NodeList return hota hai)
const allItems = document.querySelectorAll(".list-item");
console.log("querySelectorAll:", allItems);

// ✅ 2. Changing Content – text ya HTML badalna:
const title = document.getElementById("main-heading");
title.textContent = "Updated Heading via JS";
title.innerHTML = "<span style='color:red'>Changed!</span>";

// ✅ 3. Changing Styles – CSS properties ko change karna
const box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";
box.style.padding = "10px";
box.style.borderRadius = "8px";

// ✅ 4. Attributes – kisi element ke attributes lena aur set karna
const link = document.querySelector("a");
console.log("Href before:", link.getAttribute("href"));
link.setAttribute("href", "https://www.codewithsmr.com");
link.textContent = "Visit CodeWithSMR";

// ✅ 5. Creating and Appending Elements – naye elements banana aur DOM mein daalna
const newListItem = document.createElement("li");
newListItem.textContent = "New List Item";
newListItem.className = "list-item";

document.querySelector("ul").appendChild(newListItem);

// ✅ 6. Removing Elements – kisi element ko DOM se hataana
const firstItem = document.querySelector("li");
firstItem.remove();

// ✅ 7. Traversing the DOM – elements ke darmiyan move karna
const ul = document.querySelector("ul");
console.log("Parent Node:", ul.parentNode);
console.log("Children:", ul.children);
console.log("First Child:", ul.firstElementChild);
console.log("Last Child:", ul.lastElementChild);

// ✅ Practice:
// 1️⃣ Ek button banao jo click hone par heading ka color change kare
// 2️⃣ Ek naya paragraph add karo page ke end par
// 3️⃣ List ke tamam items ko loop karke console mein print karo

// ✅ Real-World Example:
// Dynamic content banana, navbar update karna, form validation, modal open/close – sab DOM ke through hota hai.

// ✅ DOM ke bina koi bhi interactive website possible nahi.
// DOM samajhna frontend development ka foundation hai!
