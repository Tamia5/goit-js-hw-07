import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const galleryItemsCardList = galleryItems
    .map(({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}'>
        </a>
    </li>`)
    .join('');

// console.log(galleryItemsCardList);

galleryListEl.insertAdjacentHTML('beforeend', galleryItemsCardList);

galleryListEl.addEventListener('click', selectItem);

function selectItem(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    // const largeImage = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src='${event.target.dataset.source}'>`,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', openModalbyEsc);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', openModalbyEsc);
            },
        }
    );
    instance.show();

     function openModalbyEsc(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }

    // const instance = basicLightbox.create(
    //     `<img src='${largeImage}'>`), 
    //     {
    //       onShow: (instance) => {
    //     document.addEventListener('keydown', openModalbyEsc);
    // }
    // onClose: (instance) => {
    //     document.removeEventListener('keydown', openModalbyEsc);
    // }
    // }

    // galleryListEl.addEventListener('keydown', event => {
    //     if (event.code === 'Escape') {
    //         instance.close();
    //     }
    // })
};