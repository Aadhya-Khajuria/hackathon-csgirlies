const dateInput = document.getElementById("date");

if (dateInput && !dateInput.value) {
  dateInput.valueAsDate = new Date();
}

function getStorageKey(baseKey) {
  const currentDate = dateInput ? dateInput.value : "no_date";
  return `mindfulness_${currentDate}_${baseKey}`;
}

function loadMindfulnessEntry() {
  const sections = document.querySelectorAll(".journal-card .section");
  let buttonGroupIndex = 0;

  sections.forEach((section) => {
    const buttons = [...section.querySelectorAll("button")];
    if (buttons.length === 0) return;

    const currentGroupIdx = buttonGroupIndex;
    buttonGroupIndex++;

    buttons.forEach((btn) => {
      btn.style.background = "#5a4d7a";
      btn.style.color = "white";
    });

    const savedIndex = localStorage.getItem(
      getStorageKey(`btn_group_${currentGroupIdx}`)
    );
    if (savedIndex !== null && buttons[savedIndex]) {
      buttons[savedIndex].style.background = "#b8a4d4";
    }
  });

  const textInputs = [
    document.getElementById("goal-input"),
    document.getElementById("practice-input"),
    document.getElementById("mind-input"),
  ];

  textInputs.forEach((el) => {
    if (el) {
      el.value = localStorage.getItem(getStorageKey(el.id)) || "";
    }
  });
}

function saveAllData(showAlert = false) {
  const sections = document.querySelectorAll(".journal-card .section");
  let buttonGroupIndex = 0;

  sections.forEach((section) => {
    const buttons = [...section.querySelectorAll("button")];
    if (buttons.length === 0) return;

    const currentGroupIdx = buttonGroupIndex;
    buttonGroupIndex++;

    const activeIndex = buttons.findIndex(
      (btn) =>
        btn.style.background === "rgb(184, 164, 212)" ||
        btn.style.background === "#b8a4d4"
    );
    if (activeIndex !== -1) {
      localStorage.setItem(
        getStorageKey(`btn_group_${currentGroupIdx}`),
        activeIndex
      );
    } else {
      localStorage.removeItem(getStorageKey(`btn_group_${currentGroupIdx}`));
    }
  });

  const textInputs = [
    document.getElementById("goal-input"),
    document.getElementById("practice-input"),
    document.getElementById("mind-input"),
  ];

  textInputs.forEach((el) => {
    if (el) {
      localStorage.setItem(getStorageKey(el.id), el.value);
    }
  });

  if (showAlert) {
    alert("Mindfulness entry successfully saved!");
  }
}

function setupEventListeners() {
  const sections = document.querySelectorAll(".journal-card .section");
  let buttonGroupIndex = 0;

  sections.forEach((section) => {
    const buttons = [...section.querySelectorAll("button")];
    if (buttons.length === 0) return;

    const currentGroupIdx = buttonGroupIndex;
    buttonGroupIndex++;

    section.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;

      buttons.forEach((btn) => {
        btn.style.background = "#5a4d7a";
        btn.style.color = "white";
      });

      e.target.style.background = "#b8a4d4";

      const clickedIndex = buttons.indexOf(e.target);
      localStorage.setItem(
        getStorageKey(`btn_group_${currentGroupIdx}`),
        clickedIndex
      );
    });
  });

  const textInputs = [
    document.getElementById("goal-input"),
    document.getElementById("practice-input"),
    document.getElementById("mind-input"),
  ];

  textInputs.forEach((el) => {
    if (el) {
      el.addEventListener("input", () => {
        localStorage.setItem(getStorageKey(el.id), el.value);
      });
    }
  });

  const saveBtn = document.querySelector(".save-button");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveAllData(true);
    });
  }

  if (dateInput) {
    dateInput.addEventListener("change", loadMindfulnessEntry);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  loadMindfulnessEntry();
});
