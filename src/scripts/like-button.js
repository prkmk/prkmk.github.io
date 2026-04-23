document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".like-button");

  buttons.forEach(button => {
    const countEl = button.querySelector(".like-count");

    const startDate = button.dataset.start; // e.g. "2024-01-01"
    let count = getDaysSince(startDate);

    countEl.textContent = count;

    button.addEventListener("click", () => {
      count++;
      countEl.textContent = count;
    });
  });
});

function getDaysSince(dateString) {
  const past = new Date(dateString);
  const now = new Date();

  const pastUTC = Date.UTC(
    past.getFullYear(),
    past.getMonth(),
    past.getDate()
  );

  const nowUTC = Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  return Math.floor((nowUTC - pastUTC) / (1000 * 60 * 60 * 24));
}