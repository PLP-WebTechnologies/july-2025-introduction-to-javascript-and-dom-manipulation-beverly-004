// =============================
// Part 1: JavaScript Basics
// =============================

// Variables + conditionals
document.getElementById("check-age-btn").addEventListener("click", function() {
  let age = prompt("Enter your age:");
  age = Number(age);

  let message;
  if (age >= 18) {
    message = "✅ You are an adult!";
  } else if (age > 0) {
    message = "⚠️ You are under 18.";
  } else {
    message = "❌ Invalid input!";
  }

  document.getElementById("age-result").textContent = message;
});


// =============================
// Part 2: Functions
// =============================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("calc-total-btn").addEventListener("click", function() {
  let price = Number(prompt("Enter price per item:"));
  let qty = Number(prompt("Enter quantity:"));
  let total = calculateTotal(price, qty);

  document.getElementById("total-result").textContent = 
    `Total: $${total}`;
});

// Function 2: Toggle text visibility
function toggleText() {
  const textElement = document.getElementById("toggle-text");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

document.getElementById("toggle-text-btn").addEventListener("click", toggleText);


// =============================
// Part 3: Loops
// =============================

// Example 1: For loop
document.getElementById("show-numbers-btn").addEventListener("click", function() {
  const list = document.getElementById("numbers-list");
  list.innerHTML = ""; // clear old list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
});

// Example 2: While loop - countdown
document.getElementById("countdown-btn").addEventListener("click", function() {
  let count = 5;
  let output = "";

  while (count > 0) {
    output += count + " ";
    count--;
  }

  document.getElementById("countdown-result").textContent = "Countdown: " + output;
});


// =============================
// Part 4: DOM Manipulation
// =============================

// Interaction 1: Change background color
document.getElementById("change-color-btn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
});

// Interaction 2: Add new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
  const ul = document.getElementById("dynamic-list");
  const li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});

// Interaction 3: Toggle footer text style
document.querySelector("footer").addEventListener("click", function() {
  this.style.color = this.style.color === "yellow" ? "white" : "yellow";
});
