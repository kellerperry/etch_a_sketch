const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

const grid = document.querySelector('#grid');
const gridSizeBtn = document.querySelector('#gridSizeBtn');
const defaultColorBtn = document.querySelector('#defaultColor')
const pizzazzBtn = document.querySelector('#pizzazz');
const clearBtn = document.querySelector('#clearBtn')
const sketchRow = document.getElementById('row');
const sketchColumn = document.querySelectorAll('.columns');

let gridSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

gridSizeBtn.addEventListener('click', getUserInput)
clearBtn.onclick = () => reloadGrid();

function getUserInput () {
    let userInput = prompt('Enter a value between 1 and 100');
    if(userInput === null) {
        return;
    } 
    while(userInput < 1 || userInput > 100) {
        userInput = prompt('Enter a value between 1 and 100');
    } 
    gridSize = userInput;
    reloadGrid();
}

function setGrid(size) {
    for(let i = 0; i <= size; i++) {
        let createRowDiv = document.createElement('div');
        createRowDiv.id = "row";
    
        for(let j = 0; j <= size; j++) {
                let gridSquare = document.createElement('div');
                gridSquare.id = "column";
                gridSquare.className = "columns";
                gridSquare.addEventListener('mouseover', addPizzazz);
                gridSquare.addEventListener('mousedown', changeColor);
                createRowDiv.appendChild(gridSquare);
            }
        grid.appendChild(createRowDiv);
    }
}


function changeColor (e) {
    e.target.style.backgroundColor = currentColor;
}

function addPizzazz (e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function reloadGrid() {
    clearGrid()
    setGrid(gridSize);
}

function clearGrid() {
    grid.innerHTML = '';
}


window.onload = () => {
    setGrid(gridSize);
}
