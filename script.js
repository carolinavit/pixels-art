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
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateColor();
  }
  const newColors = document.getElementById('color-palette');
  localStorage.setItem('colorPalette', newColors.innerHTML);
}

button.addEventListener('click', defineCoresAleatorias);

window.onload = function () {
  const colorPalette = document.getElementById('color-palette');
  const colorPaletteLocalStorage = localStorage.getItem('colorPalette');
  if (colorPaletteLocalStorage !== undefined) {
    colorPalette.innerHTML = colorPaletteLocalStorage;
  }
};
