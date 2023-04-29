let container = document.querySelector('.container');

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

addDiv(25);