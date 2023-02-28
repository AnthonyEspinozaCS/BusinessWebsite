const cards = document.querySelectorAll(".testimonial-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log("bye");
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
