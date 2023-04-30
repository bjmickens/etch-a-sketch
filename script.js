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
  
// add mouseover effect
  let divs = document.querySelectorAll('.div');
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  });
});



  };
};
};


//prompt user for number of boxes per side of new grid and remove the previous
function newGrid(){
  let y = prompt("How many boxes per side?");
  if (y <= 100 && y > 0){
  let newDivs = document.querySelectorAll('.div');
  newDivs.forEach((div) => { div.remove()});
  addDiv(y);
  }
  else {alert("Enter a number between 1-100")}
};

let clearButton = document.querySelector('#clearButton'); 
clearButton.addEventListener('click', newGrid);




//load 16x16 grid on page load
Window.onload = addDiv(16);