let container = document.querySelector('#container');

// For 1 to N
//   Add row div
//   For 1 to N
//     Add col div to row
//   Append row div 

let userInput = 8;


for(let i = 0; i <= userInput; i++) {
    let sketchRow = document.createElement('div');
    sketchRow.id = "row";

    for(let j = userInput; j > i; j--) {
            let sketchCol = document.createElement('div');
            sketchCol.id = "column";
        
            sketchRow.appendChild(sketchCol);
        }
    container.appendChild(sketchRow);
}




