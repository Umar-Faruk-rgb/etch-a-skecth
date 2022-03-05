const grid = document.querySelector('#grid');
let gridSize = 60;

for(let i = 1; i <= gridSize; i++) {
    const rows = document.createElement('div');
    rows.classList.add('row');
    grid.appendChild(rows);

    for(j = 1; j <= gridSize; j++) {
        const columns = document.createElement('div');
        columns.classList.add('box');
        rows.appendChild(columns);
    }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "yellow";
    });
});