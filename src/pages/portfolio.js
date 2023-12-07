import '../public/styles/main.scss';
import './portfolio.scss';

import '../public/components/p-header/p-header.js';
import '../public/components/p-footer/p-footer.js';
import { pHeaderHtml } from '../public/components/p-header/p-header.js';
import { pFooterHtml } from '../public/components/p-footer/p-footer.js';

import '../public/i18n/language.js';
import { lang_pt } from '../public/i18n/pt-br';
import { lang_en } from '../public/i18n/en-us.js';


// Importação de header e footer / Header and Footer import
const headerHtml = document.createElement('div');

headerHtml.innerHTML = pHeaderHtml;

headerHtml.classList.add('p-header');
headerHtml.setAttribute('id', 'p-header');

document.querySelector('header').appendChild(headerHtml);

const footerHtml = document.createElement('div');
footerHtml.innerHTML = pFooterHtml;

footerHtml.classList.add('p-footer');

document.querySelector('footer').appendChild(footerHtml);

// Efeito de digitação / Typing effect
const greetingLine1 = document.querySelector('#greeting-line1');
const greetingLine2 = document.querySelector('#greeting-line2');
const greetingLine3 = document.querySelector('#greeting-line3');
const greetingLine4 = document.querySelector('#greeting-line4');

function typingEffect (element, blockType = 'inline-block') {
  return new Promise((resolve) => {
    element.style.display = blockType;
    
    const text = element.innerHTML;
    element.innerHTML = '';
  
    let index = 0;
    const timer = setInterval (function() {
      if (index < text.length) {
        element.append(text.charAt(index));
        index++
      } else {
        clearInterval(timer);
        element.classList.remove('-cursor');
        resolve();
      }
    }, 50)
  })
}

function animateText() {
  setTimeout (() => {
    [1, 2, 3, 4].forEach(index => {
      eval(`greetingLine${index}`).classList.add('-cursor');
      eval(`greetingLine${index}`).style.display = 'none';
    })
  
    typingEffect (greetingLine1).then(() => 
      typingEffect (greetingLine2, 'block').then(() => 
        typingEffect(greetingLine3).then(() => 
          typingEffect(greetingLine4)
        )
      )
    )
  }, 100)
}

animateText();

const LanguageBtn = document.querySelectorAll('#language-btn');
LanguageBtn.forEach((el) => el.addEventListener('click', animateText));

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
  setDescription: (descriptionKey) => {    
    const selectedLang = localStorage.getItem('lang') === 'pt-br' ? lang_pt : lang_en;
    document.querySelector('#skill-description').innerHTML = selectedLang[descriptionKey];
    document.querySelector('#div-placeholder').style.display = 'none';
  },

  clearDescription: () => {
    document.querySelector('#skill-description').innerHTML = '';
    document.querySelector('#div-placeholder').style.display = 'block';
  },
}

window.iconsController = iconsController;

//Mostrar mais/menos projetos / Show more/less projects
const seeMoreController = {
  seeMore () {
    const moreProjectsDiv = document.querySelector('#more-projects');
    let divDisplay = window.getComputedStyle(moreProjectsDiv).display;
    let buttonText = document.querySelector('#see-more-text');
    let svgPath = document.querySelector('#bi-chevron');

    const selectedLang = localStorage.getItem('lang') === 'pt-br' ? lang_pt : lang_en;
    let isBtnMore;   
    localStorage.getItem('isBtnMore');
    
  
    if (divDisplay === 'none') {
      moreProjectsDiv.style.display = 'flex';
      svgPath.innerHTML = '<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>';
      isBtnMore = false;
      localStorage.setItem('isBtnMore', isBtnMore.toString());
    } else {
      moreProjectsDiv.style.display = 'none';
      svgPath.innerHTML = '<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>';
      isBtnMore = true;
      localStorage.setItem('isBtnMore', isBtnMore.toString());
    } 
    buttonText.textContent = isBtnMore ? selectedLang.seeMore : selectedLang.seeLess;
    
  }
}

window.seeMoreController = seeMoreController;