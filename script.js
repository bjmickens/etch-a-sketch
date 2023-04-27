let container = document.querySelector('.container');

function addDiv(numberOfDivs) {
  let gridDimensions = ((600 / numberOfDivs) - 2);
  let gridSize = Math.pow(numberOfDivs, 2);

console.log(gridDimensions);

 while (gridSize > 0) {
  const newDiv = document.createElement('div');
  container.appendChild(newDiv);
  newDiv.classList.add('div');
  newDiv.style.height = gridDimensions + 'px';
  newDiv.style.width = gridDimensions + 'px';
  newDiv.style.border = '1px solid black';
gridSize--; 
 };
};

addDiv(10);