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
  
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = localStorage.getItem(id) || "";
  });
  
  const save =
    document.getElementById("savePlanner") ||
    document.querySelector(".meow button");
  
  if (save) {
    save.onclick = () => {
      fields.forEach((id) => {
        const el = document.getElementById(id);
        if (el) localStorage.setItem(id, el.value);
      });
      alert("Planner saved!");
    };
  }
  