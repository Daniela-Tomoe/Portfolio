import '../../styles/main.scss';
import './p-header.scss';

const pHeaderController = {
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