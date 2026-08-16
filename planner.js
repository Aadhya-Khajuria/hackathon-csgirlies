const fields = [
  "notes",
  "goals",
  "mindfulness",
  "movement",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// Load saved data when page opens
fields.forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.value = localStorage.getItem(id) || "";
});

// Save Functionality
const save = document.getElementById("savePlanner");
if (save) {
  save.onclick = () => {
    fields.forEach((id) => {
      const el = document.getElementById(id);
      if (el) localStorage.setItem(id, el.value);
    });
    alert("Planner saved!");
  };
}

// Reset Functionality
const reset = document.getElementById("resetPlanner");
if (reset) {
  reset.onclick = () => {
    if (confirm("Are you sure you want to completely reset your planner? This will delete all saved text.")) {
      fields.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.value = "";
          localStorage.removeItem(id);
        }
      });
      alert("Planner cleared successfully!");
    }
  };
}
