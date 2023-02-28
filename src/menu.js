function createMenuItem(name, price, desc) {
  const item = document.createElement('div');
  const itemName = document.createElement('div');
  const itemPrice = document.createElement('div');
  const itemDescription = document.createElement('div');

  item.classList.add('item');
  itemName.classList.add('item-name');
  itemPrice.classList.add('item-price');

  itemName.textContent = name;
  itemPrice.textContent = price;
  itemDescription.textContent = desc;

  itemName.append(itemDescription);
  item.appendChild(itemName);
  item.appendChild(itemPrice);

  return item;
}

function createMenu() {
  const menu = document.createElement('div');
  const title = document.createElement('div');
  const items = document.createElement('div');

  menu.classList.add('menu');
  title.classList.add('menu-title');
  items.classList.add('menu-items');

  title.textContent = 'MENU';

  items.appendChild(
    createMenuItem(
      'Neapolitan',
      '20$',
      "Italy's #1 Choice! Tomato sauce, fresh mozzarella & basil"
    )
  );
  items.appendChild(
    createMenuItem(
      'Tricolore',
      '22$',
      'Mozzarella, sun-dried tomatoes, grilled chicken & spinach - drizzled with olive oil & an extra "pinch" of grated Parmigiano cheese'
    )
  );
  items.appendChild(
    createMenuItem(
      'Veggie',
      '24$',
      'Mushrooms, peppers, onions, broccoli, olives, eggplant, fresh tomatoes'
    )
  );
  items.appendChild(
    createMenuItem(
      'Primavera',
      '22$',
      'Fresh sliced tomatoes, marinated artichokes, mushrooms, black olives, and a touch of garlic. Served with or without mozzarella'
    )
  );

  menu.appendChild(title);
  menu.appendChild(items);

  return menu;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.append(createMenu());
}
export default loadMenu;
