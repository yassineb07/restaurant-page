function createHome() {
  const aboutText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis. Imperdiet nulla malesuada.';

  const home = document.createElement('div');
  const welcome = document.createElement('div');
  const about = document.createElement('p');
  const order = document.createElement('button');

  home.classList.add('home');
  welcome.classList.add('home-welcome');
  about.classList.add('home-about');
  order.classList.add('order-btn');

  welcome.textContent = 'Bienvenue';
  about.textContent = aboutText;
  order.textContent = 'Order Now';

  home.appendChild(welcome);
  home.appendChild(about);
  home.appendChild(order);

  return home;
}

export default createHome;
