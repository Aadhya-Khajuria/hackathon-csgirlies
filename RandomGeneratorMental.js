// Random Generator for Mental- Self Care
const activities = [
    "🌿 Take a relaxing walk outside.",
    "📝 Write down three things you're grateful for.",
    "🎵 Listen to a song you enjoy.",
    "🌿 Take a short break from your screen.",
    "🎨 Spend 10 minutes doing something creative.",
    "📖 Read a few pages of something you enjoy.",
    "💬 Message or talk to someone you trust.",
    "🌳 Spend a little time outside.",
    "🧘 Take a few slow, comfortable breaths.",
    "☀️ Do something small that makes you happy.",
    "✨ Take a moment to notice how you're feeling.",
  ];
  
  function generateActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const activity = activities[randomIndex];
    const suggestion = document.getElementById("suggestion");
    suggestion.textContent = activity;
  }
  