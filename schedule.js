const calendar = document.getElementById("calendar");

function displayCalendar() {
  if (calendar.style.display === "none") {
    calendar.style.display = "block";
  } else {
    calendar.style.display = "none";
  }
}
