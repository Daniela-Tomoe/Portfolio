import '../../styles/main.scss';
import './p-header.scss';
import { lang_pt } from '../../i18n/pt-br';
import { lang_en } from '../../i18n/en-us';

const pHeaderController = {
  changeLanguageHandler: (lang) => {
    let language;

    if(lang === 'pt') language = lang_pt
    if(lang === 'en') language = lang_en

    document.querySelector('#greeting-line1').textContent = language.greetingLine1;
    document.querySelector('#greeting-line2').textContent = language.greetingLine2;
    document.querySelector('#greeting-line3').textContent = language.greetingLine3;
    document.querySelector('#greeting-line4').textContent = language.greetingLine4;
    document.querySelector('#sobre-mim').textContent = language.sobreMim;
  },

  openSettings: () => {
    if (!document.querySelector('.page-settings').classList.contains('_hide')) {
      document.querySelector('.page-settings').classList.add('_hide');
    } else {document.querySelector('.page-settings').classList.remove('_hide')}
  },

  closeSettings: () => {
    if (document.querySelector('.page-settings').classList.contains('_hide')) return;
    
    document.querySelector('.page-settings').classList.add('_hide');
  },

  changeToEnUs: () => {
    document.querySelectorAll('.-en-us').forEach(element => element.classList.remove('_hide'));
    document.querySelectorAll('.-pt-br').forEach(element => element.classList.add('_hide'));
  },
  
  changeToPtBr: () => {
    document.querySelectorAll('.-en-us').forEach(element => element.classList.add('_hide'));
    document.querySelectorAll('.-pt-br').forEach(element => element.classList.remove('_hide'));
  },

  changeToDarkMode: () => {
    document.querySelector('.p-header').classList.add('--dark-mode');
    document.querySelector('body').classList.add('--dark-mode');
  },

  changeToLightMode: () => {
    document.querySelector('.p-header').classList.remove('--dark-mode');
    document.querySelector('body').classList.remove('--dark-mode');
  }
};

window.pHeaderController = pHeaderController;

document.addEventListener('click', (event) => {
  if (!event.target.closest('.page-settings') && !event.target.closest('.btn-settings')) {
    pHeaderController.closeSettings();
  }
});

export const pHeaderHtml = `
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
      <button id="language-btn" class="btn --pt-br" onclick="pHeaderController.changeLanguage('pt')">
        PT-BR
      </button>
      <button id="language-btn" class="btn --en-us" onclick="pHeaderController.changeLanguage('en')">
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
</div>` 