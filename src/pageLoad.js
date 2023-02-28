function createTitle() {
  const title = document.createElement('div');

  title.classList.add('header-title');
  title.textContent = 'Neapolitan';

  return title;
}

function createNav() {
  const nav = document.createElement('nav');
  const buttons = document.createElement('div');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  nav.classList.add('header-nav');
  buttons.classList.add('header-buttons');
  homeBtn.classList.add('nav-button');
  menuBtn.classList.add('nav-button');
  contactBtn.classList.add('nav-button');

  homeBtn.setAttribute('id', 'home');
  menuBtn.setAttribute('id', 'menu');
  contactBtn.setAttribute('id', 'contact');

  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  buttons.appendChild(homeBtn);
  buttons.appendChild(menuBtn);
  buttons.appendChild(contactBtn);
  nav.appendChild(buttons);

  return nav;
}

function createHeader() {
  const header = document.createElement('header');

  header.appendChild(createTitle());
  header.appendChild(createNav());

  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  return main;
}

function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
}

export default loadPage;
