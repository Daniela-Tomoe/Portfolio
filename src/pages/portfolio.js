import '../public/styles/main.scss';
import './portfolio.scss';

import '../public/components/p-header/p-header.js';
import '../public/components/p-footer/p-footer.js';

// Importação de header e footer
const headerHtml = document.createElement('div');
headerHtml.innerHTML = `
  <div class="page-menu">
    <div class="nav-bar -pt-br">
      <a href="#">Início</a>
      <a href="#">Sobre</a>
      <a href="#">Tecnologias</a>
      <a href="#">Projetos</a>
      <a href="#">Contato</a>
    </div>
    <div class="nav-bar -en-us _hide">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Technologies</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </div>
    <button onclick="pHeaderController.openSettings()" class="btn-settings">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
      </svg>
    </button>
  </div>
  <div class="page-settings _hide">
    <div class="language-settings">
      <p class="language">
        Idioma/Language:
      </p>
      <div class="settings">
        <button class="btn --pt-br" onclick="pHeaderController.changeToPtBr()">
          PT-BR
        </button>
        <button class="btn --en-us" onclick="pHeaderController.changeToEnUs()">
          EN-US
        </button>
      </div>
    </div>
    <div class="theme-settings">
      <p class="theme">
        Tema/Theme:
      </p>
      <div class="settings">
        <button class="btn --light" onclick="pHeaderController.changeToLightMode()">
          Light
        </button>
        <button class="btn --dark" onclick="pHeaderController.changeToDarkMode()">
          Dark
        </button>
      </div>
    </div>
  </div>`;

headerHtml.classList.add('p-header');

document.querySelector('header').appendChild(headerHtml);

const footerHtml = document.createElement('div');
footerHtml.innerHTML = `
  <p>&#169; 2023 - Daniela Tomoe | Designed by Daniela Tomoe</p>
  `;

footerHtml.classList.add('p-footer');

document.querySelector('footer').appendChild(footerHtml);

// Efeito de digitação
function typeWrite (element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach(function (letter, i) {
    setTimeout (function() {
      element.innerHTML += letter;
    }, 75*i)
  })
}

const typeEffect = document.querySelectorAll('.auto-type');
typeEffect.forEach(typeWrite);

//Efeito de retirada de blur
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.p-section');
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var distanceFromTop = section.getBoundingClientRect().top;
    if (distanceFromTop < window.innerHeight * 0.5) {
      section.style.filter = 'none';
    }
  }
});

//Efeito nos icons em tecnologias
const iconsController = {
  hideOtherDescriptions: (hoveredDiv) => {
    document.querySelectorAll(`.${hoveredDiv.parentNode.className} > div`).forEach(div => {
      if(div !== hoveredDiv) {
        div.style.display = 'none';
      }
      hoveredDiv.style.display = 'block';
    })
  },

  htmlDesc: (hover) => {
    const hoveredDiv = document.querySelector('.html-description');
    if (hover) {
      document.querySelector('.html-description .-pt-br').innerHTML = 'Html é tal coisa ptbr';
      document.querySelector('.html-description .-en-us').innerHTML = 'Html é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.html-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.html-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  cssDesc: (hover) => {
    const hoveredDiv = document.querySelector('.css-description');
    if (hover) {
      document.querySelector('.css-description .-pt-br').innerHTML = 'Css é tal coisa ptbr';
      document.querySelector('.css-description .-en-us').innerHTML = 'Css é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.css-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.css-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  javascriptDesc: (hover) => {
    const hoveredDiv = document.querySelector('.javascript-description');
    if (hover) {
      document.querySelector('.javascript-description .-pt-br').innerHTML = 'javascript é tal coisa ptbr';
      document.querySelector('.javascript-description .-en-us').innerHTML = 'javascript é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.javascript-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.javascript-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  bootstrapDesc: (hover) => {
    const hoveredDiv = document.querySelector('.bootstrap-description');
    if (hover) {
      document.querySelector('.bootstrap-description .-pt-br').innerHTML = 'bootstrap é tal coisa ptbr';
      document.querySelector('.bootstrap-description .-en-us').innerHTML = 'bootstrap é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.bootstrap-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.bootstrap-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  gitDesc: (hover) => {
    const hoveredDiv = document.querySelector('.git-description');
    if (hover) {
      document.querySelector('.git-description .-pt-br').innerHTML = 'git é tal coisa ptbr';
      document.querySelector('.git-description .-en-us').innerHTML = 'git é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.git-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.git-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  viteDesc: (hover) => {
    const hoveredDiv = document.querySelector('.vite-description');
    if (hover) {
      document.querySelector('.vite-description .-pt-br').innerHTML = 'vite é tal coisa ptbr';
      document.querySelector('.vite-description .-en-us').innerHTML = 'vite é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.vite-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.vite-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  sassDesc: (hover) => {
    const hoveredDiv = document.querySelector('.sass-description');
    if (hover) {
      document.querySelector('.sass-description .-pt-br').innerHTML = 'sass é tal coisa ptbr';
      document.querySelector('.sass-description .-en-us').innerHTML = 'sass é tal coisa enus';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.sass-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.sass-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },
}

window.iconsController = iconsController;

const htmlPtDescPlaceholder = `Passe o mouse sobre os ícones!
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse2" viewBox="0 0 16 16">
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"/>
</svg>`;

const htmlEnDescPlaceholder = `Mouse over the icons!
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse2" viewBox="0 0 16 16">
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"/>
</svg>`;