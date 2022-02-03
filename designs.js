// Select color input
let colorChoice = document.getElementById('colorPicker');
// Select size input
let tableSize = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');

function makeGrid() {
    // Your code goes here!
    canvas.innerHTML = "";
    const row = gridHeight.value;
    const column = gridWidth.value;
    let tableBody = document.createElement('tbody');

    for (let n = 0; n < row; n++){
        let gridRow = document.createElement('tr');

        for (let m = 0; m < column; m++){
            let gridColumn = document.createElement('td');
            gridRow.appendChild(gridColumn);

            tableBody.appendChild(gridRow);

            gridColumn.addEventListener('mousedown', function(grid) {
                grid.target.style.backgroundColor = colorChoice.value;
            });
        }
    }
    canvas.appendChild(tableBody);
}

// When size is submitted by the user, call makeGrid()
tableSize.addEventListener('submit', function(grid) {
    grid.preventDefault();
    return makeGrid();
});