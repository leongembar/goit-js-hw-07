import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const containerEl = document.querySelector('.gallery');

const string = galleryItems.map((item) =>
    
    `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img 
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </li>
    `
).join('');

containerEl.innerHTML = string;

const pictureEl = document.querySelector('.gallery__link');

pictureEl.addEventListener('click', ( (event)=> event.preventDefault() ) )