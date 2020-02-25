//container to put the cells in
const containerDiv = document.getElementById('container');


createTable();

function createTable() {

    for (let i = 0; i < 16 * 16; i++) {

        let cell = document.createElement('div');
        cell.classList.add('cell');
        containerDiv.appendChild(cell);
    }

}