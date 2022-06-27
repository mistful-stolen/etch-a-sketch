const container = document.getElementById("container");
const subContainer = document.createElement("div");
const element = document.createElement("div");

createGrid();

function createGrid() {
  createFirstNode();
  cloneNodes();

  function cloneNodes() {
    for (let i = 0; i < 15; i++) {
      container.appendChild(subContainer.cloneNode(true));
    }
  }
  function createFirstNode() {
    container.appendChild(subContainer);

    for (let i = 0; i < 16; i++) {
      subContainer.appendChild(element.cloneNode(true));
    }
  }
}
