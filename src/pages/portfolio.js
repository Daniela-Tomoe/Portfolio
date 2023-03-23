import '../public/styles/main.scss';
import './portfolio.scss';

import '../public/components/p-header/p-header.js';
import '../public/components/p-footer/p-footer.js';
import '../public/i18n/language.js';
import { lang_pt } from '../public/i18n/pt-br';
import { lang_en } from '../public/i18n/en-us.js';

import { pHeaderHtml } from '../public/components/p-header/p-header.js';
import { pFooterHtml } from '../public/components/p-footer/p-footer.js';

// Importação de header e footer / Header and Footer import
const headerHtml = document.createElement('div');

headerHtml.innerHTML = pHeaderHtml;

headerHtml.classList.add('p-header');

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

const speed = 50;

function typeEffect (element, speed, blockType = 'inline-block') {
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
    }, speed)
  })
}

function animateText() {
  setTimeout (() => {
    [1, 2, 3, 4].forEach(index => {
      eval(`greetingLine${index}`).classList.add('-cursor');
      eval(`greetingLine${index}`).style.display = 'none';
    })
  
    typeEffect (greetingLine1, speed).then(() => 
      typeEffect (greetingLine2, speed, 'block').then(() => 
        typeEffect(greetingLine3, speed).then(() => 
          typeEffect(greetingLine4, speed)
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

localStorage.setItem('lang', 'pt-br');

//Efeito nos icons em habilidades / Effects on skill icons
const iconsController = {
  setDescription: (descriptionKey) => {    
    const selectedLang = localStorage.getItem('lang') === 'pt-br' ? lang_pt : lang_en;
    document.querySelector('#description').innerHTML = selectedLang[descriptionKey];
    document.querySelector('#div-placeholder').style.display = 'none';
  },

  clearDescription: () => {
    document.querySelector('#description').innerHTML = '';
    document.querySelector('#div-placeholder').style.display = 'block';
  },
}

window.iconsController = iconsController;