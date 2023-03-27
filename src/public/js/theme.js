import { day_mode } from "./day-mode";
import { night_mode } from "./night-mode";

function changeThemeHandler (mode) {
  let theme;

  if (mode === 'day') theme = day_mode;
  if (mode === 'night') theme = night_mode;

  localStorage.setItem('theme', mode);

  document.querySelector('#day-theme').setAttribute('src', theme.dayTheme);
  document.querySelector('#night-theme').setAttribute('src', theme.nightTheme);
  document.querySelector('#mail-icon').setAttribute('src', theme.mailIcon);
  document.querySelector('#github-icon').setAttribute('src', theme.githubIcon);
  document.documentElement.style.setProperty('--p-bg-color-base', theme.bgColorBase);
  document.documentElement.style.setProperty('--p-bg-color-base-lighter', theme.bgColorBaseLighter);
  document.documentElement.style.setProperty('--p-text-base-color', theme.textBaseColor);
  document.documentElement.style.setProperty('--p-text-title-color', theme.textTitleColor);
  document.documentElement.style.setProperty('--p-project-container-color', theme.textProjectContainerColor);
}

window.changeThemeHandler = changeThemeHandler;