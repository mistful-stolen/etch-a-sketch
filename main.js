const container = document.getElementById("container");
const range = document.getElementById("range");
const rangeLabel = document.getElementById("label");
const subContainer = document.createElement("div");
const element = document.createElement("div");
const clear = document.getElementById("clear");
const COLOR_BLACK = "black";

rangeLabel.textContent = `${range.value}x${range.value}`;

range.addEventListener("input", () => {
  rangeLabel.textContent = `${range.value}x${range.value}`;
});

subContainer.setAttribute("id", "subContainer");
element.setAttribute("id", "element");

createGrid(range.value);
let idElements = document.querySelectorAll("#element");
gridHover();
changeGrid();

clear.addEventListener("click", () => {
  idElements.forEach((item) => {
    item.style.backgroundColor = "black";
  });
});

function changeGrid() {
  range.addEventListener("mouseup", () => {
    const idSubContainer = document.querySelectorAll("#subContainer");
    idElements = document.querySelectorAll("#element");

    idSubContainer.forEach((item) => {
      item.remove();
    });
    idElements.forEach((item) => {
      item.remove();
    });

    createGrid(range.value);
    idElements = document.querySelectorAll("#element");

    gridHover();
  });
}

function clearGrid() {
  idElements.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

function gridHover() {
  idElements.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
  });
}

function createGrid(gridSize) {
  createFirstNode(gridSize);
  cloneNodes(gridSize);

  function cloneNodes(userGridNumber) {
    for (let i = 1; i < userGridNumber; i++) {
      container.appendChild(subContainer.cloneNode(true));
    }
  }
  function createFirstNode(userGridNumber) {
    container.appendChild(subContainer);

    for (let i = 0; i < userGridNumber; i++) {
      subContainer.appendChild(element.cloneNode(true));
    }
  }
}
