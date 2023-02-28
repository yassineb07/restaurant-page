function createHours() {
  const hours = document.createElement('div');
  const title = document.createElement('p');
  const line1 = document.createElement('p');
  const line2 = document.createElement('p');

  hours.classList.add('hours');
  title.classList.add('hours-title');

  title.textContent = 'Working Hours';
  line1.textContent = 'MONDAY-THURSDAY 11am-10pm';
  line2.textContent = 'FRIDAY-SUNDAY 12pm-11pm';

  hours.appendChild(title);
  hours.appendChild(line1);
  hours.appendChild(line2);

  return hours;
}

function createLocation() {
  const location = document.createElement('div');
  const title = document.createElement('p');
  const line1 = document.createElement('p');
  const line2 = document.createElement('p');

  location.classList.add('location');
  title.classList.add('location-title');

  title.textContent = 'Visit Us';
  line1.textContent = '1888 Fieldcrest Road';
  line2.textContent = 'New York 10011 ,USA';

  location.appendChild(title);
  location.appendChild(line1);
  location.appendChild(line2);

  return location;
}

function createPhone() {
  const phone = document.createElement('div');
  const call = document.createElement('p');
  const number = document.createElement('p');

  phone.classList.add('phone');
  call.classList.add('call');

  call.textContent = 'Call us';
  number.textContent = '123 456 789';

  phone.appendChild(call);
  phone.appendChild(number);

  return phone;
}

function createInfo() {
  const info = document.createElement('div');

  info.classList.add('contact-info');

  info.appendChild(createPhone());
  info.appendChild(createHours());
  info.appendChild(createLocation());

  return info;
}

function createContact() {
  const contact = document.createElement('div');
  const title = document.createElement('div');

  contact.classList.add('contact');
  title.classList.add('contact-title');

  title.textContent = 'Contact us';
  contact.appendChild(title);
  contact.appendChild(createInfo());

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.append(createContact());
}
export default loadContact;
