import { lang_pt } from './pt-br.js';
import { lang_en } from './en-us.js';

function changeLanguageHandler (lang) {
  let language;

  if (lang === 'pt-br') language = lang_pt;
  if (lang === 'en-us') language = lang_en;

  localStorage.setItem('lang', lang);

    document.querySelector('#home-anchor').textContent = language.homeAnchor;
    document.querySelector('#about-anchor').textContent = language.aboutAnchor;
    document.querySelector('#skills-anchor').textContent = language.skillsAnchor;
    document.querySelector('#projects-anchor').textContent = language.projectsAnchor;
    document.querySelector('#contacts-anchor').textContent = language.contactsAnchor;
    document.querySelector('#greeting-line1').textContent = language.greetingLine1;
    document.querySelector('#greeting-line2').textContent = language.greetingLine2;
    document.querySelector('#greeting-line3').textContent = language.greetingLine3;
    document.querySelector('#greeting-line4').textContent = language.greetingLine4;
    document.querySelector('#about-me-title').textContent = language.aboutMeTitle;
    document.querySelector('#about-me-text').textContent = language.aboutMeText;
    document.querySelector('#skills-title').textContent = language.skillsTitle;
    document.querySelector('#skill-placeholder-text').innerHTML = language.skillPlaceholderText;
    document.querySelector('#html-text').textContent = language.htmlText;
    document.querySelector('#css-text').textContent = language.cssText;
    document.querySelector('#javascript-text').textContent = language.javascriptText;
    document.querySelector('#bootstrap-text').textContent = language.bootstrapText;
    document.querySelector('#git-text').textContent = language.gitText;
    document.querySelector('#vite-text').textContent = language.viteText;
    document.querySelector('#sass-text').textContent = language.sassText;
    document.querySelector('#projects-title').textContent = language.projectsTitle;
    document.querySelector('#db-project-info').textContent = language.dbProjectInfo;
    document.querySelectorAll('#soon-project-info').forEach((el) => el.textContent = language.soonProjectInfo);
    document.querySelector('#see-more-btn').textContent = language.seeMoreBtn;
    document.querySelector('#github-repository').textContent = language.githubRepository;
    document.querySelector('#contacts-title').textContent = language.contactsTitle;
    document.querySelector('#whatsapp').textContent = language.whatsapp;
    document.querySelector('#mail').textContent = language.mail;
    document.querySelector('#github').textContent = language.github;
    document.querySelector('#linkedin').textContent = language.linkedin;

}

window.changeLanguageHandler = changeLanguageHandler;