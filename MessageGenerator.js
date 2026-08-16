// Positive Message Generator
const messages = [
  "🌟 You are doing better than you think.",
  "💚 Small steps still count as progress.",
  "✨ Your kindness can make someone's day better.",
  "☀️ You deserve moments of happiness and peace.",
  "💪 Keep going — your efforts matter.",
  "🌈 A difficult day doesn't define your whole journey.",
  "😊 Don't forget to celebrate the little wins.",
  "💫 You can make a positive difference.",
  "🌿 Take things one step at a time.",
  "💛 You are allowed to rest and recharge.",
  "🌸 You’ve got this!",
"💜 Small steps count.",
"✨ Believe in yourself!",
"🌷 Be proud of yourself.",
"☀️ Today is a fresh start.",
"🦋 Take it one step at a time.",
"💫 You’re doing great!",
"🌼 Be kind to yourself.",
"🌈 Keep going!",
"🫶 You matter.",
"🌙 It’s okay to take a break.",
"⭐ You can do this!",
"💐 Celebrate the little wins.",
"🌿 Take a breath.",
"💖 You’re doing better than you think.",
"🍀 Good things take time.",
"🪻 Keep being you!",
"☁️ You don’t have to be perfect.",
"🌺 Your effort matters.",
"💜 You’re capable of amazing things."
];

function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  const suggestion = document.getElementById("suggestion");

  suggestion.textContent = message;
}
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");

q1.addEventListener("input",save );
q2.addEventListener("input",save );
q3.addEventListener("input",save );
q4.addEventListener("input",save );
function save() {
  localStorage.setItem("q1", q1.value);
  localStorage.setItem("q2", q2.value);
  localStorage.setItem("q3", q3.value);
  localStorage.setItem("q4", q4.value);
}

window.addEventListener("load", reload);
function reload() {
  const savedQ1 = localStorage.getItem("q1");
  if (savedQ1) {
    q1.value = savedQ1;
  }
  const savedQ2 = localStorage.getItem("q2");
  if (savedQ2) {
    q2.value = savedQ2;
  }
  const savedQ3 = localStorage.getItem("q3");
  if (savedQ3) {
    q3.value = savedQ3;
  }
  const savedQ4 = localStorage.getItem("q4");
  if (savedQ4) {
    q4.value = savedQ4;
  }
}
function resetPositivity() {
  localStorage.removeItem("q1.value");
  localStorage.removeItem("q2.value");
  localStorage.removeItem("q3.value");
  localStorage.removeItem("q4.value");
  q1.value = "";
  q2.value = "";
  q3.value = "";
  q4.value = "";
}
