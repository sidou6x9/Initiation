function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
hiddenElementsLeft.forEach((el) => observer.observe(el));
const hiddenElementsRight = document.querySelectorAll(".hidden-right");
hiddenElementsRight.forEach((el) => observer.observe(el));
const hiddenElementsDown = document.querySelectorAll(".hidden-down");
hiddenElementsDown.forEach((el) => observer.observe(el));
const hiddenElementsUp = document.querySelectorAll(".hidden-up");
hiddenElementsUp.forEach((el) => observer.observe(el));
