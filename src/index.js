import "./style.css";
import loadPage from './pageLoad';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function initPage() {
  loadPage();
  loadHome();
}
initPage();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
  button.classList.add('active');
}

homeBtn.addEventListener('click', (e) => {
  setActiveButton(e.target);
  loadHome();
});

menuBtn.addEventListener('click', (e) => {
  setActiveButton(e.target);
  loadMenu();
});

contactBtn.addEventListener('click', (e) => {
  setActiveButton(e.target);
  loadContact();
});
