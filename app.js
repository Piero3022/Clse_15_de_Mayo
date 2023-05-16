// getElementById
// get ElementByTagName

const navigator = document.getElementById('navigator');
//const link = document.getElementsByTagName('a');
const link = document.querySelector('#navigator nav ul');

//console.log(navogator);

console.log(link);

const heading = document.getElementById('my-heading');
heading.textContent = 'Nuevo texto';

const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'red';
}

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Este es un nuevo párrafo';

const container = document.getElementById('container');
container.appendChild(newParagraph);

// JS
const myElement = document.querySelector('#my-element');
myElement.style.backgroundColor = 'blue';


