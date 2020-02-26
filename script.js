const containerDiv = document.getElementById('container');

createTable(10);

changeCellColor("black");

function createTable(cellSize) {

    for (let i = 0; i < cellSize * cellSize; i++) {
        let boxSize = (500 / cellSize);
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = boxSize + "px";
        cell.style.height = boxSize + "px";
        containerDiv.appendChild(cell);
    }

}

function changeCellColor(cellColor) {

    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {

        if (cellColor == "black") {
            cell.addEventListener("mouseover", (e) => {
                cell.style.backgroundColor = cellColor;

            });
        }
        else if (cellColor == "rainbow") {

            let randomColor = Math.floor(Math.random() * 16777215).toString(16);

            cell.addEventListener("mouseover", (e) => {
                cell.style.backgroundColor = "#" + randomColor;
            });
        }
    });
}

function clearSketcher() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {

        cell.style.backgroundColor = "white";
    });

    changeCellColor("black");
}

function deleteAllCells() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.parentNode.removeChild(cell);
    });
}

function changeGrid() {
    let customCellSize = prompt("How many squares per side should the grid be? 150 max...");

    if (customCellSize != null && customCellSize <= 150) {
        deleteAllCells();
        createTable(customCellSize);
        changeCellColor("black");
    }

}

