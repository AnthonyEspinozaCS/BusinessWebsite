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

const bbqLogo = document.querySelector(".bbq-logo");

const logoObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      entry.target.classList.toggle("bbq-logo-animation", entry.isIntersecting);
      if (entry.isIntersecting) {
        logoObserver.unobserve(entry.target);
        console.log("bye");
      }
    },
    {
      threshold: 1,
    }
  );
});

logoObserver.observe(bbqLogo);
