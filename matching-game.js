let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");

function generateFaces() {
  for (let i = 0; i < numberOfFaces; i++) {
    let face = document.createElement('img');
    face.src = 'smile.png';
    let randomTop = Math.floor(Math.random() * 400) + 1; 
    let randomLeft = Math.floor(Math.random() * 400) + 1; 
    face.style.top = randomTop + 'px';
    face.style.left = randomLeft + 'px';
    theLeftSide.appendChild(face);  
  }
  let leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages)
  theLeftSide.lastChild.addEventListener('click',nextLevel);
  document.body.addEventListener('click',gameOver);
}

function nextLevel() {
  event.stopPropagation();
  numberOfFaces += 5;
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  generateFaces();
}

function gameOver () {
  alert("Game Over!");
  theLeftSide.lastChild.removeEventListener('click',nextLevel);
  document.body.removeEventListener('click',gameOver);
}



