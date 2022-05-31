// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from './gallery-items.js';
// Place for insert the gallery
const placeGalleryRef = document.querySelector(".gallery");

//Make one element of gallery from backend data
const makeGalleryEl = ({preview, original, description}) => {
  return galleryItems.map(({preview , original, description}) => {
    const listEl = 
    `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;

    return listEl;
  }).join("");
};

//Make all elements of gallery
const imagesELadd = makeGalleryEl(galleryItems);

// Add the gallery to the html file
placeGalleryRef.insertAdjacentHTML("afterbegin", imagesELadd);

//Prepare pictures for SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);
