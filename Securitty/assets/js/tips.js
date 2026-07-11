const searchInput = document.getElementById("searchTips");

const filterButtons = document.querySelectorAll(".category-button button");

const tipCards = document.querySelectorAll(".tip-card");

// =============================
// SEARCH TIPS
// =============================

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();

    tipCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      const text = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(keyword) || text.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// =============================
// FILTER CATEGORY
// =============================

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.filter;

    tipCards.forEach((card) => {
      if (category === "all") {
        card.style.display = "block";
      } else if (card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// =============================
// HOVER EFFECT
// =============================

tipCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = ".35s";
  });
});

// =============================
// FEATURED CARD ANIMATION
// =============================

const featured = document.querySelector(".featured-card");

window.addEventListener("scroll", () => {
  if (!featured) return;

  const top = featured.getBoundingClientRect().top;

  if (top < window.innerHeight - 120) {
    featured.classList.add("show");
  }
});

// =============================
// CHECKLIST
// =============================

const checklist = document.querySelectorAll(".check-item");

checklist.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");
  });
});

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// =============================
// SEARCH CLEAR
// =============================

searchInput?.addEventListener("search", () => {
  tipCards.forEach((card) => {
    card.style.display = "block";
  });
});

// =============================
// CONSOLE
// =============================

console.log("Tips Page Loaded");
