const createBtn = document.querySelector(".btn--create");
const gridContainer = document.querySelector(".container");
const dropdownMenu = document.querySelector(".grid-size");
const customInputEl = document.querySelector("input[type='number']");

dropdownMenu.addEventListener("change", (e) => {
  customInputEl.classList.add("hidden");
  if (e.target.value === "custom") {
    customInputEl.classList.remove("hidden");
  }
});

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(dropdownMenu.value);
});
