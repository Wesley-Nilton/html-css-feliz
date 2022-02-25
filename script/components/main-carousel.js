// 1 Acessar a janela (browser)
// 2 Identificar todo o documento
// 3 Identificar o ".button-arrow.-right"
// 4 Saber que está sendo clicado no botão

// 5 Identificar a janela (browser)
// 6 Identificar o documento
// 7 Identificar o ".elements"
// 8 Mover o ".elements" para direita

const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 50;

btnRight.addEventListener('click', function() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
});