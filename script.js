/* mood journal javascript */
const moodDateInput = document.getElementById("date");

if (moodDateInput && !moodDateInput.value) {
  moodDateInput.valueAsDate = new Date();
}

function getMoodStorageKey(baseKey) {
  const currentDate = moodDateInput ? moodDateInput.value : "no_date";
  return `mood_${currentDate}_${baseKey}`;
}

function loadMoodJournalEntry() {
  const moodGroups = [".mood-options", ".energy-options", ".stress-options"];
  moodGroups.forEach((selector, index) => {
    const group = document.querySelector(selector);
    if (!group) return;

    [...group.children].forEach((b) => {
      if (b.tagName === "BUTTON") b.style.background = "#5a4d7a";
    });

    const savedIndex = localStorage.getItem(getMoodStorageKey(`btn_${index}`));
    if (savedIndex !== null && group.children[savedIndex]) {
      group.children[savedIndex].style.background = "#b8a4d4";
    }
  });

  const moodTextFields = document.querySelectorAll(
    ".journal-card textarea, .journal-card input[type='text']"
  );
  moodTextFields.forEach((el, index) => {
    el.value = localStorage.getItem(getMoodStorageKey(`text_${index}`)) || "";
  });
}

const moodGroupsList = [".mood-options", ".energy-options", ".stress-options"];
moodGroupsList.forEach((selector, index) => {
  const group = document.querySelector(selector);
  if (!group) return;

  group.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    [...group.children].forEach((b) => {
      if (b.tagName === "BUTTON") b.style.background = "#5a4d7a";
    });
    e.target.style.background = "#b8a4d4";

    const clickedIndex = [...group.children].indexOf(e.target);
    localStorage.setItem(getMoodStorageKey(`btn_${index}`), clickedIndex);
  });
});

const moodTextFieldsList = document.querySelectorAll(
  ".journal-card textarea, .journal-card input[type='text']"
);
moodTextFieldsList.forEach((el, index) => {
  el.addEventListener("input", () => {
    localStorage.setItem(getMoodStorageKey(`text_${index}`), el.value);
  });
});

if (moodDateInput) {
  moodDateInput.addEventListener("change", loadMoodJournalEntry);
}

loadMoodJournalEntry();

/* end of mood journal javascript */
