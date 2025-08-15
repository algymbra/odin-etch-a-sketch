const createBtn = document.querySelector(".btn--create");
const gridContainer = document.querySelector(".container");
const dropdownMenu = document.querySelector(".grid-size");
const customInputEl = document.querySelector("input[type='number']");


let gridSize = 32;

dropdownMenu.addEventListener("change", (e) => {
  customInputEl.classList.add("hidden");

  if (e.target.value === "custom") {
    customInputEl.classList.remove("hidden");
    gridSize = null;
  } else {
    gridSize = parseInt(e.target.value);
  }
  
});

createBtn.addEventListener("click", (e) => {
  e.preventDefault();

  gridSize =  gridSize || parseInt(customInputEl.value);

});
