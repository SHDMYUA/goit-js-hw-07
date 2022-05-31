// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';

// Place for insert the gallery
const placeGalleryRef = document.querySelector(".gallery");

//Make one element of gallery from backend data
const makeGalleryEl = ({preview, original, description}) => {
  return galleryItems.map(({preview , original, description}) => {
    const listEl = `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
      </div>
    `;

    return listEl;
  }).join("");
};

//Make all elements of gallery
const imagesELadd = makeGalleryEl(galleryItems);

// Add the gallery to the html file
placeGalleryRef.insertAdjacentHTML("afterbegin", imagesELadd);

//Add listener for open large window
placeGalleryRef.addEventListener('click', onTagsContainerClick);

//Function for check places of click and change src for large image)
function onTagsContainerClick(event){
    event.preventDefault()
    const currentImg = event.target;

    if(!currentImg.classList.contains("gallery__image")){
    return;
  }
  const src = currentImg.dataset.source;
  const alt = currentImg.alt;
  makeModalwindow(src, alt); //call modal window
};

// Function for open large img in the modal window (with basicLightbox)

function makeModalwindow(src, alt){
  const instance = basicLightbox
  .create(`<img src="${src}" alt="${alt}" width="800" height="600">`)
  .show();
  window.addEventListener("keydown", closeModal);
  };


// Add function for close modal window by ESCkey
function closeModal () {
  const findClass = document.querySelector(".basicLightbox");
  findClass.classList.remove("basicLightbox--visible");
  window.removeEventListener("keydown", closeModal);
};