import '../../styles/main.scss';
import './p-header.scss';
import '../../i18n/language';
import { lang_pt } from '../../i18n/pt-br.js';
import { lang_en } from '../../i18n/en-us.js';
import '../../js/theme';

localStorage.setItem('theme', 'day');
localStorage.setItem('lang', 'pt-br');

const pHeaderController = {
  openMenu: () => {
    const navBar = document.getElementById('navbar');
    const navBarStyle = window.getComputedStyle(navBar).display;
    if (navBarStyle === 'none') {
      navBar.style.display = 'flex';
    } else {
      navBar.style.display = 'none'
    }
  },
  
  closeMenu: () => {
    const navBar = document.getElementById('navbar');
    const navBarStyle = navBar.style.display;
    const windowWidth = window.innerWidth;
    
    if (windowWidth < 900 && navBarStyle === 'flex') {
      navBar.style.display = 'none'
    }
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

  toggleLanguage() {
    const currentLanguage = localStorage.getItem('lang');
    const newLanguage = currentLanguage === 'pt-br' ? 'en-us' : 'pt-br';
    changeLanguageHandler(newLanguage);
    pHeaderController.changeLangIcon();
  },

  changeThemeIcon: () => {
    const daySrc = '../../assets/images/header/sun-daymode.png';
    const nightSrc = '../../assets/images/header/moon-nightmode.png';

    if (localStorage.getItem('theme') === 'day') {
      document.querySelector('#active-theme').setAttribute('src', daySrc);
    } else {
      document.querySelector('#active-theme').setAttribute('src', nightSrc);
    }
  },

  toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'day' ? 'night' : 'day';
    changeThemeHandler(newTheme);
    pHeaderController.changeThemeIcon();
  },

  resplayLottieAnimation() {
    const lottiePlayer = document.getElementById('lottie-animation');
    
      lottiePlayer.pause();
      lottiePlayer.seek(0);
      lottiePlayer.play();
  }
};

window.pHeaderController = pHeaderController;

function toggleDisplay() {
  const navBar = document.querySelector('#navbar');
  const moreProjects = document.querySelector('#more-projects');
  let buttonText = document.querySelector('#see-more-text');
  const selectedLang = localStorage.getItem('lang') === 'pt-br' ? lang_pt : lang_en;
  const windowWidth = window.innerWidth;  

  if (windowWidth < 900) {
    navBar.style.display = 'none';
    moreProjects.style.display = 'none';

  } else {
    navBar.style.display = 'flex';
    moreProjects.style.display = 'flex';
    localStorage.setItem('isBtnMore', 'true');
  }

  let isBtnMore = localStorage.getItem('isBtnMore') === 'true' ? true : false;
  buttonText.textContent = isBtnMore ? selectedLang.seeMore : selectedLang.seeLess;
}

window.addEventListener('resize', toggleDisplay);


export const pHeaderHtml = `
<div class="header-container">
  <div class="menu-mobile" onclick="pHeaderController.openMenu()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
  </div>

  <div class="logo">
    <img src="../../assets/images/header/personal-logo.png" class="personal-logo" alt="Logo pessoal escrito dato.dev">
  </div>

  <div class="navbar-settings">
    <div class="navbar" id="navbar">
      <a id="home-anchor" class="link" href="#home" onclick="pHeaderController.closeMenu()">Início</a>
      <a id="about-anchor" class="link" href="#about" onclick="pHeaderController.closeMenu()">Sobre mim</a>
      <a id="skills-anchor" class="link" href="#skills" onclick="pHeaderController.closeMenu()">Habilidades</a>
      <a id="projects-anchor" class="link" href="#projects" onclick="pHeaderController.closeMenu()">Projetos</a>
      <a id="contacts-anchor" class="link" href="#contacts" onclick="pHeaderController.closeMenu()">Contato</a>
    </div>

    <div id="settings" class="settings">
      <div class="language">
        <button class="p-btn -settings -lang-active" id="language-btn" onclick="pHeaderController.toggleLanguage(), pHeaderController.resplayLottieAnimation()">
          <img src="../../assets/images/header/bra.png" alt="Bandeira do brasil" id="active-lang" class="lang-img">
        </button>
      </div>

      <div class="theme">
        <button class="p-btn -settings -theme-active" onclick="pHeaderController.toggleTheme()">
          <img src="../../assets/images/header/sun-daymode.png" alt="Sol" id="active-theme" class="theme-img">
        </button>
      </div>
    </div>
  </div>
</div>`;