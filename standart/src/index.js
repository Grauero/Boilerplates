import './style.scss';

const div = document.createElement('div');
div.innerText = "sample text";
div.classList.add('class');

const div1 = document.createElement('div');
div1.innerText = "sample text";
div1.classList.add('class1');
div.appendChild(div1);

document.body.appendChild(div);