const activities = [
    "🌿 Take a relaxing walk outside.",
    "🧘 Try some gentle stretching.",
    "💃 Dance to one of your favorite songs.",
    "🌸 Try a short beginner yoga session.",
    "🌳 Spend some time outdoors.",
    "🎵 Put on some music and move around.",
    "🚶 Take a short walk away from your screen.",
    "🌱 Stretch your arms, shoulders, and legs.",
    "🏀 Play a fun physical game.",
    "☀️ Start your day with a few gentle stretches.",
    "🌙 Try some relaxing movement before bed.",
    "🐕 Play with or walk a pet if appropriate.",
    "💜 Take a movement break and do something you enjoy.",
    "✨ Choose any movement that feels comfortable for you.",
    "🌱 Take a screen-free movement break.",
  ];
  
  function generateActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const activity = activities[randomIndex];
    const suggestion = document.getElementById("suggestion");
    suggestion.textContent = activity;
  }