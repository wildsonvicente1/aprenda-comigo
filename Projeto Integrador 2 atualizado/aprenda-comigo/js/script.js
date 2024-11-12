// Seleciona os elementos do DOM
const btnAbrirMenu = document.querySelector('.btn-abrir-menu');
const btnFecharMenu = document.querySelector('.btn-fechar');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.getElementById('overlay-menu');

// Função para abrir o menu mobile
btnAbrirMenu.addEventListener('click', () => {
  menuMobile.style.display = 'block';  // Exibe o menu mobile
  overlay.style.display = 'block';     // Exibe o overlay para efeito escuro
});

// Função para fechar o menu mobile
btnFecharMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';   // Esconde o menu mobile
  overlay.style.display = 'none';      // Esconde o overlay
});

// Fecha o menu ao clicar fora (overlay)
overlay.addEventListener('click', () => {
  menuMobile.style.display = 'none';
  overlay.style.display = 'none';
});
