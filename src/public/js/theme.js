import { light_mode } from "./light-mode";
import { dark_mode } from "./dark-mode";

function changeThemeHandler (mode) {
  let theme;

  if (mode === 'light') theme = light_mode;
  if (mode === 'dark') theme = dark_mode;

  document.querySelector('#mail-icon').setAttribute('src', theme.mailIcon);
  document.querySelector('#github-icon').setAttribute('src', theme.githubIcon);
  document.documentElement.style.setProperty('--p-bg-color-base', theme.bgColorBase);
  document.documentElement.style.setProperty('--p-bg-color-base-lighter', theme.bgColorBaseLighter);
  document.documentElement.style.setProperty('--p-text-base-color', theme.textBaseColor);
}

window.changeThemeHandler = changeThemeHandler;