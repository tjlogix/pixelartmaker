//select size input
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const grid = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");
//select color input
const gridColor = document.getElementById("colorPicker");

// user clicks on submit button and calls function makeGrid()
form.addEventListener(
    'submit',
    function(e) {
        //remove previous grid
        grid.innerHTML = "";
        //save curent state
        e.preventDefault();
        //call function
        makeGrid();

    });

grid.addEventListener(
    'click',
    function(e) {
        //select pixel
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = gridColor.value
        }
    }
)

/**
 * @desc create a grid of squares 
 * @param int $gridWidth - number of squares representing the width of the grid
 * @param int $gridHeight - number of squares representing the height of the grid
 */

function makeGrid() {
    for (let i = 0; i < gridHeight.value; i++) {
        const row = grid.insertRow(0);
        for (let j = 0; j < gridWidth.value; j++) {
            row.insertCell(0);
        }
    }
}