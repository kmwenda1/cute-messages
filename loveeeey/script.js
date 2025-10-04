window.addEventListener("DOMContentLoaded", () => {
  const pages = [
    { heading: "A Little Story", body: "This is a short, friendly story put together to brighten a day." },
    { heading: "Who You Are", body: "You have a calm confidence that makes busy days feel manageable." },
    { heading: "Quiet Strength", body: "On days that feel heavy, you keep going. That steady patience is impressive." },
    { heading: "Your Fun Side", body: "You make small moments better — a joke, a smile, perfect timing(my wazimu)." },
    { heading: "Little Things", body: "You notice details others miss. That thoughtfulness matters." },
    { heading: "Keep Going", body: "The path isn’t always straight, but you are moving forward." },
    { heading: "The End", body: "That’s it for now. Every day is a new chapter." }
  ];

  const headingEl = document.getElementById("pageHeading");
  const bodyEl = document.getElementById("pageBody");
  const pageIndexEl = document.getElementById("pageIndex");
  const pageCountEl = document.getElementById("pageCount");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");

  let current = 0;
  pageCountEl.textContent = pages.length;

  function renderPage(i) {
    const page = pages[i];
    headingEl.textContent = page.heading;
    bodyEl.textContent = page.body;
    pageIndexEl.textContent = i + 1;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === pages.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (current > 0) { current--; renderPage(current); }
  });
  nextBtn.addEventListener("click", () => {
    if (current < pages.length - 1) { current++; renderPage(current); }
  });
  restartBtn.addEventListener("click", () => {
    current = 0;
    renderPage(current);
  });

  renderPage(0);
});
