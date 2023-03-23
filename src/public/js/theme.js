import { day_mode } from "./day-mode";
import { night_mode } from "./night-mode";

function changeThemeHandler (mode) {
  let theme;

  if (mode === 'light') theme = day_mode;
  if (mode === 'dark') theme = night_mode;

  document.querySelector('#mail-icon').setAttribute('src', theme.mailIcon);
  document.querySelector('#github-icon').setAttribute('src', theme.githubIcon);
  document.documentElement.style.setProperty('--p-bg-color-base', theme.bgColorBase);
  document.documentElement.style.setProperty('--p-bg-color-base-lighter', theme.bgColorBaseLighter);
  document.documentElement.style.setProperty('--p-text-base-color', theme.textBaseColor);
}

window.changeThemeHandler = changeThemeHandler;