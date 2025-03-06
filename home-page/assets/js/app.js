const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("light-mode");
  });
}
