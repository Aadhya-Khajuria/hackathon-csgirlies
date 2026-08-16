// Positive Message Generator
const messages = [
  "🌟 You are doing better than you think.",
  "🌟 Small steps still count as progress.",
  "🌟 Your kindness can make someone's day better.",
  "🌟 It's okay to take things one step at a time.",
  "🌟 You deserve moments of happiness and peace.",
  "🌟 Keep going — your efforts matter.",
  "🌟 A difficult day doesn't define your whole journey.",
  "🌟 Don't forget to celebrate the little wins.",
  "🌟 You have the ability to make a positive difference.",
  "🌟 Take a breath, be kind to yourself, and keep moving forward.",
  "🌟You are allowed to rest and recharge.",
  "🌟 Something good can start with one small step."
];

function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  const suggestion = document.getElementById("suggestion");

  suggestion.textContent = message;
}
