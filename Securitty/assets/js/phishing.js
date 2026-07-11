// ==========================================
// SIMULASI EMAIL
// ==========================================

const safeButton = document.querySelector(".safe-btn");

const phishingButton = document.querySelector(".phishing-btn");

if (safeButton) {
  safeButton.addEventListener("click", () => {
    safeButton.classList.add("selected");

    showPopup(

"✅",

"Email Aman",

"Email ini berasal dari domain resmi Google sehingga aman.",

"#22C55E"

);
  });
}

if (phishingButton) {
  phishingButton.addEventListener("click", () => {
    phishingButton.classList.add("selected");

    alert("✅ Tepat! Domain '.xyz' merupakan indikasi email phishing.");
  });
}

// ==========================================
// SIMULASI WEBSITE
// ==========================================

const safeWebsite = document.querySelector(".website-safe");

const fakeWebsite = document.querySelector(".website-phishing");

if (safeWebsite) {
  safeWebsite.addEventListener("click", () => {
    safeWebsite.classList.add("selected");

    alert("✅ Website resmi menggunakan domain asli.");
  });
}

if (fakeWebsite) {
  fakeWebsite.addEventListener("click", () => {
    fakeWebsite.classList.add("selected");

    alert("✅ Tepat! URL tersebut merupakan website phishing.");
  });
}

// ==========================================
// MINI QUIZ
// ==========================================

const options = document.querySelectorAll(".quiz-option");

const result = document.getElementById("quizMessage");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((item) => {
      item.disabled = true;
    });

    if (option.classList.contains("correct")) {
      option.style.background = "#DCFCE7";

      option.style.borderColor = "#22C55E";

      result.innerHTML =
        "✅ Jawaban benar! OTP tidak boleh diberikan kepada siapa pun.";

      result.style.color = "#16A34A";
    } else {
      option.style.background = "#FEE2E2";

      option.style.borderColor = "#EF4444";

      result.innerHTML =
        "❌ Jawaban kurang tepat. OTP bersifat rahasia dan tidak boleh dibagikan.";

      result.style.color = "#DC2626";

      document.querySelector(".correct").style.background = "#DCFCE7";

      document.querySelector(".correct").style.borderColor = "#22C55E";
    }
  });
});

// ==========================================
// SCROLL ANIMATION
// ==========================================

const cards = document.querySelectorAll(
  ".info-card,.email-card,.website-card,.warning-card,.quiz-card",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

cards.forEach((card) => {
  observer.observe(card);
});

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
// RESET QUIZ
// ==========================================

const reset = document.createElement("button");

reset.innerHTML = "Ulangi Simulasi";

reset.className = "btn-primary";

const quiz = document.querySelector(".quiz-result");

if (quiz) {
  quiz.appendChild(reset);
}

reset.addEventListener("click", () => {
  location.reload();
});

// ==========================================
// CONSOLE
// ==========================================

console.log("CyberEdu Phishing Simulation Loaded");

const popup=document.getElementById("popup");

const popupIcon=document.getElementById("popupIcon");

const popupTitle=document.getElementById("popupTitle");

const popupText=document.getElementById("popupText");

const popupClose=document.getElementById("popupClose");

function showPopup(icon,title,text,color){

    popupIcon.innerHTML=icon;

    popupIcon.style.color=color;

    popupTitle.innerHTML=title;

    popupText.innerHTML=text;

    popup.classList.add("show");

}

popupClose.addEventListener("click",()=>{

    popup.classList.remove("show");

});