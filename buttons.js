const openButton = document.querySelectorAll(".open");
const closeButton = document.querySelector(".close");
const overlay = document.getElementById("overlay");

openButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.style.width = "100%";
  });
});

closeButton.addEventListener("click", () => {
  console.log(overlay);
  overlay.style.width = "0%";
});
