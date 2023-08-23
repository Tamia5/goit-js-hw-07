import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const galleryItemsCardList = galleryItems
    .map(({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img class='gallery__image' src='${preview}' alt='${description}'>
        </a>
    </li>`)
    .join('');

// console.log(galleryItemsCardList);

galleryListEl.insertAdjacentHTML('beforeend', galleryItemsCardList);
galleryListEl.addEventListener('click', event => {
    event.preventDefault();
});

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionsDelay: 250});