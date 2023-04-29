let container = document.querySelector('.container');
// create grid in the container
function addDiv(x) {
 for (let rows = 0; rows < x; rows++){
  for (let columns = 0; columns < x; columns++){
  const newDiv = document.createElement('div'); 
 
  container.appendChild(newDiv);
  newDiv.classList.add('div');
  newDiv.style.height = (600/x) + 'px';
  newDiv.style.width = (600/x) + 'px';
  };
};
};

//remove the grid
function removeGrid(){
  document.querySelector('.div').remove();
};

//prompt user for number of boxes per side of grid
function newGrid(){
  let y = prompt("How many boxes per side?");
  removeGrid();
  addDiv(y);
};

let clearButton = document.querySelector('#clearButton'); 
clearButton.addEventListener('click', newGrid);

//load 16x16 grid on page load
Window.onload = addDiv(16);