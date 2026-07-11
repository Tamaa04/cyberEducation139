const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const articleCards = document.querySelectorAll(".article-card");

let activeFilter = "all"; // default


// ===============================
// Search Artikel
// ===============================

if (searchInput) {
  const applySearch = () => {
    const keyword = searchInput.value.toLowerCase().trim();

    articleCards.forEach((card) => {
      const titleEl = card.querySelector("h3");
      const descEl = card.querySelector("p");

      const title = titleEl ? titleEl.textContent.toLowerCase() : "";
      const description = descEl ? descEl.textContent.toLowerCase() : "";

      const matchesSearch =
        keyword === "" ||
        title.includes(keyword) ||
        description.includes(keyword);

      const matchesFilter =
        activeFilter === "all" || card.dataset.category === activeFilter;

      card.style.display = matchesSearch && matchesFilter ? "block" : "none";
    });
  };

  // Initial render
  applySearch();

  searchInput.addEventListener("keyup", applySearch);
  searchInput.addEventListener("change", applySearch);
}


// ===============================
// Filter Artikel
// ===============================

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;
    activeFilter = filter;

    articleCards.forEach((card) => {
      // Filtering should respect search query too.
      const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

      const titleEl = card.querySelector("h3");
      const descEl = card.querySelector("p");

      const title = titleEl ? titleEl.textContent.toLowerCase() : "";
      const description = descEl ? descEl.textContent.toLowerCase() : "";

      const matchesSearch =
        keyword === "" ||
        title.includes(keyword) ||
        description.includes(keyword);

      const matchesFilter =
        filter === "all" || card.dataset.category === filter;

      card.style.display = matchesSearch && matchesFilter ? "block" : "none";
    });
  });
});

// ===============================
// Pagination (Dummy)
// ===============================

const pageButtons = document.querySelectorAll(".page-btn");

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pageButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});


// ===============================
// Newsletter
// ===============================

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {
  newsletter.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input").value.trim();

    if (email === "") {
      alert("Masukkan email terlebih dahulu.");

      return;
    }

    alert("Terima kasih telah berlangganan CyberEdu!");

    this.reset();
  });
}
