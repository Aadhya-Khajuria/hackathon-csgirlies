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
