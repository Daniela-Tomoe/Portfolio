import '../../styles/main.scss';
import './p-header.scss';
import '../../i18n/language';
import '../../js/theme';

localStorage.setItem('theme', 'day');
localStorage.setItem('lang', 'pt-br');

const pHeaderController = {
  // openSettings: (seletor) => {
  //   document.querySelector(`#${seletor}`).classList.remove('_hide');
  // },
  
  // closeSettings: () => {
  //   const settingsOptions = document.querySelectorAll('#language-options, #theme-options');

  //   settingsOptions.forEach((el) => {
  //     if (el.classList.contains('_hide')) {
  //       return
  //     } else {
  //       el.classList.add('_hide')
  //     }  
  //   })
  // },

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