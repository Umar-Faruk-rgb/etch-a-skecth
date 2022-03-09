const grid = document.querySelector('#grid');
let boxes = document.querySelectorAll('.box');
const colorInput = document.querySelector('#colorInput');
const sizeInput = document.querySelector('#sizeInput');
const clearBtn = document.querySelector('#clearBtn');
const sizeValue = document.querySelector('#sizeValue');
const options = document.querySelector('#options');
const infoBox = document.querySelector('#info-box');

options.addEventListener('click', () => {
    infoBox.style.display = "flex";
    document.querySelector('#first').style.display = "block";
})

//Event Listeners
sizeInput.addEventListener('change', () => {
    changeSizeValue();
    changeGrid();
});

clearBtn.addEventListener('click', clearGrid);

// Functions
function changeGrid() {
    grid.innerHTML = ''; //clear the grid

    gridSize = sizeInput.value;
    for(let i = 1; i <= gridSize; i++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        grid.appendChild(rows);
    
        for(j = 1; j <= gridSize; j++) {
            const columns = document.createElement('div');
            columns.classList.add('box');
            columns.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = colorInput.value;
            });
            rows.appendChild(columns);
        }
    }
};

function setColor(){
    color = colorInput.value;
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = colorInput.value;
        });
    });
};

function clearGrid(){
    boxes = document.querySelectorAll('.box');
    for(let i=0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "white";
    }
}

function changeSizeValue(){
    gridSize = sizeInput.value;
    sizeValue.textContent = `${gridSize} x ${gridSize}`
}