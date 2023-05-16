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

const firstLi = document.querySelector('ul').firstChild.nextSibling;
const firstLy = document.querySelector('ul').closest('ul');
const element = document.querySelector('h1');

//document.querySelector('.content').innerHTML = `<h1>Hola</h1>`;
//document.querySelector('.content').textContent = 'Solo texto';
//document.querySelector('.content').style = 'color: blue';

//document.getElementById('navigator') = 'display: none';
//document.querySelector('section').setAttribute('id', 'section-atribute');


console.log(firstLi);
console.log(firstLy);

const parent = document.getElementById('parent');
const first = parent.firstChild;
const last = parent.lastChild;

console.log(first);
console.log(last);

const oranges = document.getElementsByTagName('li')[1];
const bananas = oranges.nextSibling;

console.log(bananas.textContent);



const div = document.getElementById('myDiv');
const html = div.innerHTML;
const text = div.textContent;

console.log(html);
console.log(text);

const divi = document.getElementById('myDiv');
div.style.color = 'red';
div.style.backgroundColor = 'yellow';

const img = document.getElementById('myImg');
img.setAttribute('src', 'imagen2.jpg');
img.removeAttribute('alt');








