const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const indicator = document.querySelector(".indicator");
const listItems = document.querySelectorAll("li");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

function activeLink() {
  listItems.forEach((listItem) => {
    listItem.classList.remove("active");
    this.classList.add("active");
    indicator.style.zIndex = "50";
  });
}

listItems.forEach((listItem) => listItem.addEventListener("click", activeLink));
