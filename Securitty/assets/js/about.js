// ==========================================
// FAQ ACCORDION
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;

      const target = parseInt(counter.innerText);

      let current = 0;

      const increment = Math.ceil(target / 60);

      const update = () => {
        current += increment;

        if (current >= target) {
          counter.innerText = target + "+";
        } else {
          counter.innerText = current + "+";

          requestAnimationFrame(update);
        }
      };

      update();

      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// ==========================================
// SCROLL ANIMATION
// ==========================================

const cards = document.querySelectorAll(
  ".vision-card,.why-card,.developer-card,.faq-item",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach((card) => observer.observe(card));

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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

// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {
  console.log("CyberEdu About Page Loaded");
});
