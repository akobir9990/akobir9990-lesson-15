// <--dark mode function start -->

let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/icons/dark.svg";
  } else {
    this.firstElementChild.src = "images/icons/light.svg";
  }
  document.body.classList.toggle("light");
});

// <--dark mode function end -->

// <--borger menu function start -->

const sidebarToggle = document.querySelector(".burger");
const sidebar = document.querySelector(".aside");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}
// <--borger menu function end -->
