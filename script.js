const button = document.getElementById('button-random-color');

// Função de gerar cor aleatória retirada do site hora de codar.
function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function defineCoresAleatorias() {
  const colors = document.querySelectorAll('.color');
  const newColors = [];
  newColors[0] = 'rgb(0)';
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateColor();
    newColors[index] = colors[index].style.backgroundColor;
  }
  localStorage.setItem('colorPalette', JSON.stringify(newColors));
}

button.addEventListener('click', defineCoresAleatorias);
function savePalette() {
  const colorPaletteLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
  if (colorPaletteLocalStorage !== null) {
    const colorPalette = document.getElementsByClassName('color');
    for (let index = 0; index < colorPalette.length; index += 1) {
      colorPalette[index].style.backgroundColor = colorPaletteLocalStorage[index];
    }
  }
}

function createDiv() {
  const pixelBoard = document.getElementById('pixel-board');
  const pixelBox = document.createElement('div');
  pixelBox.className = 'pixel';
  pixelBox.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixelBox);
}

function selecionarCor(e) {
  const escolheCor = document.querySelectorAll('.color');
  escolheCor.classList.remove('selected');
  e.target.classList.add('selected');
}

const getColors = document.querySelectorAll('.color');
for (let index = 0; index < getColors.length; index += 1) {
  getColors[index].addEventListener('click', selecionarCor);
}

window.onload = function () {
  for (let index = 0; index < 25; index += 1) {
    createDiv();
  }
  savePalette();
};
