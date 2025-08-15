const createBtn = document.querySelector(".btn--create");
const gridContainer = document.querySelector(".container");
const dropdownMenu = document.querySelector(".grid-size");
const customInputEl = document.querySelector("input[type='number']");
const clearBtn = document.querySelector(".btn--clear");

const CONTAINER_SIZE = 480;

let gridSize = 32;

const brushColorPickerEl = document.querySelector("input[type='color']");
let brushColor = "#ccc";

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
  gridSize = gridSize || parseInt(customInputEl.value);
  createGrid(gridSize);
});

function createGrid(size) {
  gridContainer.innerHTML = ``;
  const divSize = CONTAINER_SIZE / size;
  for (let i = 1; i <= size; i++) {
    for (let i = 1; i <= size; i++) {
      const div = document.createElement("div");
      div.style.width = `${divSize}px`;
      div.style.height = `${divSize}px`;
      div.classList.add("box", "grid-lines");
      gridContainer.append(div);
    }
  }
}

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = `${brushColor}`;
  }
});

brushColorPickerEl.addEventListener("input", (e) => {
  brushColor = e.target.value;
});

clearBtn.addEventListener("click", () => {
  createGrid(gridSize);
});
