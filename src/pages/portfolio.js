import '../public/styles/main.scss';
import './portfolio.scss';

import '../public/components/p-header/p-header.js';
import '../public/components/p-footer/p-footer.js';

// Importação de header e footer / Header and Footer import
const headerHtml = document.createElement('div');
headerHtml.innerHTML = `
  <div class="page-menu">
    <div class="nav-bar -pt-br">
      <a href="#home">Início</a>
      <a href="#about">Sobre</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Projetos</a>
      <a href="#contacts">Contato</a>
    </div>
    <div class="nav-bar -en-us _hide">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contact</a>
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

// Efeito de digitação / Typing effect
const line1Pt = document.querySelector('#line1-pt');
const line2Pt = document.querySelector('#line2-pt');
const line3Pt = document.querySelector('#line3-pt');
const line4Pt = document.querySelector('#line4-pt');
const line1En = document.querySelector('#line1-en');
const line2En = document.querySelector('#line2-en');
const line3En = document.querySelector('#line3-en');
const line4En = document.querySelector('#line4-en');
const speed = 100;

const delay = line1Pt.innerHTML.length * speed + speed;
const delay2 = (line1Pt.innerHTML.length + line2Pt.innerHTML.length) * speed + speed;
const delay3 = (line1Pt.innerHTML.length + line2Pt.innerHTML.length + line3Pt.innerHTML.length) * speed + speed;

function typeEffect (element, speed) {
  const text = element.innerHTML;
  element.innerHTML = '';

  let i = 0;
  const timer = setInterval (function() {
    if (i<text.length) {
      element.append(text.charAt(i));
      i++
    } else {
      clearInterval(timer);
      element.classList.remove('greeting-pt')
      element.classList.remove('greeting-en')
    }
  }, speed)
}

function animateTextPt() {
  typeEffect (line1Pt, speed);

  setTimeout (function() {
    line2Pt.style.display = 'block';
    typeEffect (line2Pt, speed)
  }, delay);

  setTimeout (function() {
    line3Pt.style.display = 'inline-block';
    typeEffect (line3Pt, speed)
  }, delay2);

  setTimeout (function() {
    line4Pt.style.display = 'inline-block';
    typeEffect (line4Pt, speed)
  }, delay3);
}

animateTextPt();

function animateTextEn() {
  typeEffect (line1En, speed);

  setTimeout (function() {
    line2En.style.display = 'block';
    typeEffect (line2En, speed)
  }, delay);

  setTimeout (function() {
    line3En.style.display = 'inline-block';
    typeEffect (line3En, speed)
  }, delay2);

  setTimeout (function() {
    line4En.style.display = 'inline-block';
    typeEffect (line4En, speed)
  }, delay3);
}

const LanguageBtn = document.querySelector(`.settings .btn`);
LanguageBtn.addEventListener('click', animateTextEn, animateTextPt)

//Efeito de retirada de blur / Blur removal effect
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.p-section');
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var distanceFromTop = section.getBoundingClientRect().top;
    if (distanceFromTop < window.innerHeight * 0.6) {
      section.style.filter = 'none';
    }
  }
});

//Efeito nos icons em habilidades / Effects on skill icons
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
      document.querySelector('.html-description .-pt-br').innerHTML = 'HTML5 é a versão mais recente da Linguagem de Marcação de Hipertexto, que serve para estruturar, interpretar e exibir o conteúdo de um documento web por meio de tags e atributos em um navegador.';
      document.querySelector('.html-description .-en-us').innerHTML = 'HTML5 is the latest version of the Hypertext Markup Language, which serves to structure, interpret and display the content of a web document through tags and attributes in a browser.';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.html-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.html-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  cssDesc: (hover) => {
    const hoveredDiv = document.querySelector('.css-description');
    if (hover) {
      document.querySelector('.css-description .-pt-br').innerHTML = 'CSS3 é a versão mais recente do Cascading Style Sheets, e é uma linguagem usada para ilustrar a aparência, estilo e formato de um documento escrito em linguagem de marcação.';
      document.querySelector('.css-description .-en-us').innerHTML = 'CSS3 is the latest version of Cascading Style Sheets, and is a language used to ilustrate the look, style and format of a documento written in markup language.';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.css-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.css-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  javascriptDesc: (hover) => {
    const hoveredDiv = document.querySelector('.javascript-description');
    if (hover) {
      document.querySelector('.javascript-description .-pt-br').innerHTML = 'JavaScript é uma linguagem de programação que permite implementar recursos complexos em páginas da Web, como atualizações de conteúdo por tempo, mapas interativos, gráficos animados, entre outros.';
      document.querySelector('.javascript-description .-en-us').innerHTML = 'JavaScript is a programming language that allows you to implement complex features on web pages like timely content updates, interactive maps, animated graphics, etc.';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.javascript-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.javascript-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  bootstrapDesc: (hover) => {
    const hoveredDiv = document.querySelector('.bootstrap-description');
    if (hover) {
      document.querySelector('.bootstrap-description .-pt-br').innerHTML = 'Bootstrap é um framework gratuito para desenvolvimento front-end e com código-fonte aberto, projetado para facilitar o processo de desenvolvimento de sites responsivos, para dispositivos móveis, fornecendo uma coleção de sintaxes para designs de modelos.';
      document.querySelector('.bootstrap-description .-en-us').innerHTML = 'Bootstrap is a free and open source front-end development framework, designed to ease the web development process of responsive, mobile-first websites by providing a collection of syntax for template designs.';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.bootstrap-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.bootstrap-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  gitDesc: (hover) => {
    const hoveredDiv = document.querySelector('.git-description');
    if (hover) {
      document.querySelector('.git-description .-pt-br').innerHTML = 'Git é um sistema de controle de versões distribuído que rastreia alterações em qualquer conjunto de arquivos do computador, geralmente usado para coordenar o trabalho entre programadores que desenvolvem código-fonte de forma colaborativa durante o desenvolvimento de software.';
      document.querySelector('.git-description .-en-us').innerHTML = 'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.git-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.git-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  viteDesc: (hover) => {
    const hoveredDiv = document.querySelector('.vite-description');
    if (hover) {
      document.querySelector('.vite-description .-pt-br').innerHTML = 'Vite é uma ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web, gerando a estrutura de código de vários frameworks e configurando bibliotecas.';
      document.querySelector('.vite-description .-en-us').innerHTML = 'Vite is a build tool that aims to provide a faster and leaner development experience for web projects by generating code structure for many frameworks and configuring libraries.';
      iconsController.hideOtherDescriptions(hoveredDiv);
    } else {
      document.querySelector('.vite-description .-pt-br').innerHTML = htmlPtDescPlaceholder;
      document.querySelector('.vite-description .-en-us').innerHTML = htmlEnDescPlaceholder;
    }
  },

  sassDesc: (hover) => {
    const hoveredDiv = document.querySelector('.sass-description');
    if (hover) {
      document.querySelector('.sass-description .-pt-br').innerHTML = 'SASS (Syntactically awesome style sheets) é um pré-processador de CSS que adiciona recursos especiais como variáveis, regras aninhadas e mixins no CSS regular. Tem como objetivo tornar o processo de codificação mais simples e eficiente.';
      document.querySelector('.sass-description .-en-us').innerHTML = 'SASS is a CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS. The aim is to make the coding process simpler and more efficient.';
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