
import {users, renderCard, showCard, filterAE, filterFL, filterMZ /* showFormButton, submitNewContact */} from './functions';





/* const titleContainer = document.querySelector('.title-container');
const title = document.createElement('h1');
title.className = 'main-title';
title.textContent = 'Contacts';

titleContainer.append(title);

const buttonContainer = document.querySelector('.button-container');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const buttonAll = document.createElement('button');

button1.className = 'button';
button2.className = 'button';
button3.className = 'button';
buttonAll.className = 'buttonAll';

button1.textContent = 'A-E';
button2.textContent = 'F-L';
button3.textContent = 'M-Z';
buttonAll.textContent = 'ALL';

buttonContainer.append(button1, button2, button3, buttonAll); */




document.addEventListener('DOMContentLoaded', renderCard);

buttonAll.addEventListener('click', showCard);

button1.addEventListener('click', filterAE);

button2.addEventListener('click', filterFL);

button3.addEventListener('click', filterMZ);

