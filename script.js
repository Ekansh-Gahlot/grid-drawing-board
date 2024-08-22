const container = document.querySelector('.container');
const gridSizeBtn = document.querySelector('.grid-size-btn');
const clearButton = document.querySelector('.clear-btn');
let isMouseDown = false;

function createGrid(numOfSquares) {
        const oldGrid = document.querySelectorAll('.grid-square');
        oldGrid.forEach(element => element.remove());
        const gridSize = numOfSquares <= 30 ? numOfSquares : 960/numOfSquares; 
        for (let i = 0; i < numOfSquares; i++) {
            for(let j = 0; j < numOfSquares; j++){
                const gridSquare = document.createElement('div');
                gridSquare.setAttribute('style',' background-color:white; box-sizing: border-box;');
                gridSquare.style.width = `${gridSize}px`;
                gridSquare.style.height = `${gridSize}px`;
                gridSquare.className = 'grid-square';
                container.appendChild(gridSquare);
            }
        }
}
createGrid(20);

function randomColorGenerator(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    return `rgb(${x},${y},${z})`;
}


container.addEventListener('mousedown', () => {
    isMouseDown = true;
});

container.addEventListener('mouseup', () => {
    isMouseDown = false;
});


container.addEventListener('mouseout',(e)=>{
    if(e.target.className === 'grid-square' && isMouseDown){
        e.target.style.backgroundColor = 'black';
        e.target.classList.add('color-changed');
    }
    
})

function clearGrid(){
    let grid_collection = document.querySelectorAll(".color-changed");
    grid_collection.forEach(element => element.style.backgroundColor = 'white');
}

clearButton.addEventListener('click', clearGrid);

function gridSizeGenerator(){
    let size =  Number(prompt("Enter grid size"));
    // console.log(size);
    // console.log(typeof size);

    while(size < 1 || size > 99)
    {
        size = prompt("Enter grid size");
    }
    let container_size = size*size;
    container.style.width = `${container_size}px`;
    createGrid(size);
   
}

gridSizeBtn.addEventListener('click',gridSizeGenerator);