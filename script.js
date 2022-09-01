const button = document.getElementById('button-random-color');
const corAleatoria = document.querySelectorAll('#corAleatoria');

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
  for (let index = 0; index < corAleatoria.length; index += 1) {
    corAleatoria[index].style.backgroundColor = generateColor();
  }
  console.log('teste');
}

button.addEventListener('click', defineCoresAleatorias);
