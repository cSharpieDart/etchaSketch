//container to put the cells in
const containerDiv = document.getElementById('container');


createTable();

changeCellColor();

function createTable() {

    for (let i = 0; i < 16 * 16; i++) {

        let cell = document.createElement('div');
        cell.classList.add('cell');
        containerDiv.appendChild(cell);
    }

}

function changeCellColor() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            cell.style.backgroundColor = "black";
        });

    });
}

function clearSketcher() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {

        cell.style.backgroundColor = "white";


    });
}