// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.




import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const placeGalleryRef = document.querySelector(".gallery");

//Function make one element of gallery from backend data
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

//Add listener
placeGalleryRef.addEventListener('click', onTagsContainerClick);

//Function for change src (size small to big)
function onTagsContainerClick(event){
    event.preventDefault()
    const currentImg = event.target;
    console.log(currentImg);  
    if(!currentImg.classList.contains("gallery__image")){
    return;
  }
  console.log("worked"); 
  // console.log(currentImg);
  instance.show(currentImg)
};

// Function for open large img in the modal window (basicLightbox)
import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)





