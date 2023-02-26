import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

function createTitle() {
  const title = document.createElement('div');

  title.classList.add('header-title');
  title.textContent = 'Neapolitan';

  return title;
}

function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');

  nav.classList.add('header-nav');
  ul.classList.add('header-nav-list');

  liHome.textContent = 'Home';
  liMenu.textContent = 'Menu';
  liContact.textContent = 'Contact';

  ul.appendChild(liHome);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);
  nav.appendChild(ul);

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
  /* main.append(createHome()); */
  /* main.append(createMenu()); */
  main.append(createContact());

  return main;
}

function renderPage() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
}

export default renderPage;
