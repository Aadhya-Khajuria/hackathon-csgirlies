const activities = [
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
  
  function generateActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const activity = activities[randomIndex];
    const suggestion = document.getElementById("suggestion");
    suggestion.textContent = activity;
  }
