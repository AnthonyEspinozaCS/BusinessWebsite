const logos = document.querySelectorAll(".logo-animation");
const rand = Math.random() * 10 + 2;

for (let i = 0; i < 10000; i++) {
  changePosition(i);
}

function changePosition(i) {
  setTimeout(function () {
    logos.forEach((logo) => {
      const position = logo.getAttribute("data-position");
      if (position === "middle") {
        logo.setAttribute("data-position", "left");
        logo.style.order = "1";
      } else if (position === "left") {
        logo.setAttribute("data-position", "right");
        logo.style.order = "3";
        console.log(logo.style);
        logo.style.animationIteration = "";
      } else {
        logo.setAttribute("data-position", "middle");
        logo.style.order = "2";
      }
    });
  }, 3000 * i);
}
