import '../../styles/main.scss';
import './p-header.scss';
import '../../i18n/language';
import '../../js/theme';

import { day_mode } from '../../js/day-mode';
import { night_mode } from '../../js/night-mode';

localStorage.setItem('mode', 'day');

const pHeaderController = {
  openSettings: (seletor) => {
    document.querySelector(`#${seletor}`).classList.remove('_hide');
  },
  
  closeSettings: () => {
    const settingsOptions = document.querySelectorAll('#language-options, #theme-options');

    settingsOptions.forEach((el) => {
      if (el.classList.contains('_hide')) {
        return
      } else {
        el.classList.add('_hide')
      }  
    })
  },

  changeLangIcon: () => {
    const ptSrc = '../../assets/images/header/bra.png';
    const enSrc = '../../assets/images/header/usa.png';

    if (localStorage.getItem('lang') === 'pt-br') {
      document.querySelector('#active-lang').setAttribute('src', ptSrc);
    } else {
      document.querySelector('#active-lang').setAttribute('src', enSrc);
    }
  },

  changeThemeIcon: () => {
    const dayThemeSrc = document.querySelector('#day-theme').getAttribute('src');
    const nightThemeSrc = document.querySelector('#night-theme').getAttribute('src');

    if (localStorage.getItem('mode') === 'day') {
      document.querySelector('#active-theme').setAttribute('src', dayThemeSrc);
    } else {
      document.querySelector('#active-theme').setAttribute('src', nightThemeSrc);
    }
  }
};

window.pHeaderController = pHeaderController;

document.addEventListener('click', (event) => {
  if (!event.target.closest('#settings')) {
    pHeaderController.closeSettings();
  }
});

export const pHeaderHtml = `
<div class="header-container">
  <div class="menu-mobile _hide">
    <img src="../../assets/images/header/menu-daymode.png" class="menu" alt="Menu">
  </div>

  <div class="logo">
    <img src="../../assets/images/header/personal-logo.png" class="personal-logo" alt="Logo pessoal escrito dato.dev">
  </div>

  <div class="navbar-settings">
    <div class="navbar">
      <a id="home-anchor" class="link" href="#home">Início</a>
      <a id="skills-anchor" class="link" href="#skills">Habilidades</a>
      <a id="projects-anchor" class="link" href="#projects">Projetos</a>
      <a id="contacts-anchor" class="link" href="#contacts">Contato</a>
    </div>

    <div id="settings" class="settings">
      <div class="language">
        <button class="p-btn -settings -lang-active" onclick="pHeaderController.openSettings('language-options')">
          <img src="../../assets/images/header/bra.png" alt="Bandeira do brasil" id="active-lang" class="lang-img">
        </button>

        <div id="language-options" class="set-container _hide">
          <button class="p-btn -settings" onclick="changeLanguageHandler('pt-br'), pHeaderController.changeLangIcon(), pHeaderController.closeSettings()">
            <img src="../../assets/images/header/bra.png" alt="Bandeira do brasil" id="pt-br-btn" class="lang-img">
          </button>
          <button class="p-btn -settings" onclick="changeLanguageHandler('en-us'), pHeaderController.changeLangIcon(), pHeaderController.closeSettings()">
            <img src="../../assets/images/header/usa.png" alt="Bandeira dos estados unidos" id="en-us-btn" class="lang-img">
          </button>
        </div>
      </div>

      <div class="theme">
        <button class="p-btn -settings -theme-active" onclick="pHeaderController.openSettings('theme-options')">
          <img src="../../assets/images/header/sun-daymode.png" alt="Sol" id="active-theme" class="theme-img">
        </button>

        <div id="theme-options" class="set-container _hide">
          <button class="p-btn -settings" onclick="changeThemeHandler('day'), pHeaderController.changeThemeIcon(), pHeaderController.closeSettings()">
            <img src="../../assets/images/header/sun-daymode.png" id="day-theme" alt="Sol" class="day-mode-btn theme-img">
          </button>
          <button class="p-btn -settings" onclick="changeThemeHandler('night'), pHeaderController.changeThemeIcon(), pHeaderController.closeSettings()">
            <img src="../../assets/images/header/moon-daymode.png" id="night-theme" alt="Lua" class="night-mode-btn theme-img">
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;