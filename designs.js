const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const grid = document.getElementById("pixelCanvas");
const gridColor = document.getElementById("colorPicker");
const form = document.getElementById("sizePicker");

form.addEventListener(
    'submit',
    function(e) {
        grid.innerHTML = "";
        e.preventDefault();
        makeGrid();

    });

grid.addEventListener(
    'click',
    function(e) {
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = gridColor.value
        }
    }
)


function makeGrid() {
    for (let i = 0; i < gridHeight.value; i++) {
        const row = grid.insertRow(0);
        for (let j = 0; j < gridWidth.value; j++) {
            row.insertCell(0);
        }
    }
}