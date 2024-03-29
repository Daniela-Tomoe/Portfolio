import { day_mode } from "./day-mode";
import { night_mode } from "./night-mode";

function changeThemeHandler (mode) {
  let theme;

  if (mode === 'day') theme = day_mode;
  if (mode === 'night') theme = night_mode;

  localStorage.setItem('theme', mode);

  document.querySelector('#p-header').style.boxShadow = theme.pHeader;
  document.querySelector('#whatsapp-icon').setAttribute('src', theme.whatsappIcon);
  document.querySelector('#mail-icon').setAttribute('src', theme.mailIcon);
  document.querySelector('#github-icon').setAttribute('src', theme.githubIcon);
  document.querySelector('#linkedin-icon').setAttribute('src', theme.linkedinIcon);
  document.documentElement.style.setProperty('--p-bg-color-base', theme.bgColorBase);
  document.documentElement.style.setProperty('--p-bg-color-base-lighter', theme.bgColorBaseLighter);
  document.documentElement.style.setProperty('--p-text-base-color', theme.textBaseColor);
  document.documentElement.style.setProperty('--p-text-title-color', theme.textTitleColor);
  document.documentElement.style.setProperty('--p-project-container-color', theme.textProjectContainerColor);
}

window.changeThemeHandler = changeThemeHandler;