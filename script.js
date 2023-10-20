const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clearBtn')

let gridSizeBtn = document.querySelector('#gridSizeBtn');


let gridSize = 16;

gridSizeBtn.addEventListener('click', getUserInput)

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

clearBtn.onclick = () => reloadGrid();


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


let sketchRow = document.getElementById('row');
let sketchColumn = document.querySelectorAll('.columns');

// sketchColumn.forEach((element) => {
//     element.addEventListener('mousedown', (event) => {
//         event.target.style.backgroundColor = 'black';
//     })
// });

function changeColor (e) {
    e.target.style.backgroundColor = 'black';
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
