const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  darkModeBtn.innerHTML = "Light Mode"
}

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", true);
    darkModeBtn.innerHTML = "Light Mode"
  } else {
    localStorage.setItem("dark-mode", false);
    darkModeBtn.innerHTML = "Dark Mode"
  }
});

