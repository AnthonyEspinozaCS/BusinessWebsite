const cards = document.querySelectorAll(".testimonial-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
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
      }
    },
    {
      threshold: 1,
    }
  );
});

try {
  logoObserver.observe(bbqLogo);
} catch (error) {
  console.error(error);
}

const options = document.querySelectorAll("article");

const optionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      entry.target.classList.toggle("animate", entry.isIntersecting);
      if (entry.isIntersecting) {
        optionsObserver.unobserve(entry.target);
      }
    },
    {
      threshold: 1,
    }
  );
});

try {
  options.forEach((option) => {
    optionsObserver.observe(option);
  });
} catch (error) {
  console.error(error);
}
