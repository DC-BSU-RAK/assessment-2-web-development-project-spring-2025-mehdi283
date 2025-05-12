// Smooth Scroll for internal navigation
const links = document.querySelectorAll("nav a[href^='#']");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// FAQ Toggle Function
const faqs = document.querySelectorAll(".faq h3");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    const answer = faq.nextElementSibling;
    const isOpen = faq.classList.contains("open");

    document.querySelectorAll(".faq h3").forEach(h => {
      h.classList.remove("open");
      if (h.nextElementSibling) h.nextElementSibling.style.display = "none";
    });

    if (!isOpen) {
      faq.classList.add("open");
      answer.style.display = "block";
    }
  });
});

// Page Load Animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});