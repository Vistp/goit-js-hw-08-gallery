import galleryItems from "./app.js";

const makeGalleryElement = galleryItem => {
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
     href= "${galleryItem.original}"
  >
    <img
      class="gallery__image"
      src= "${galleryItem.preview}"
      data-source= "${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>
  `
}

const galleryEl = document.querySelector('.js-gallery'); //галерея изображений
const lightboxEl = document.querySelector('.lightbox'); //модалка
const lightboxOverlayEl = document.querySelector('.lightbox__overlay'); //бэкдроп/ оверлэй
const btnCloseModal = document.querySelector('.lightbox__button'); //кнопка закрытия модалки
const lightboxImageEl = document.querySelector('.lightbox__image');// изображение большое внутри модалки открытой
const galleryLinkEl = document.querySelector('.gallery__link'); //ссылка
const imagesOriginal = galleryItems.map((el) => el.original); // массив оригиналов изображений из galleryItems

const makeGallery = galleryItems
  .map(makeGalleryElement)
  .join(' ');

galleryEl.insertAdjacentHTML('beforeend', makeGallery);

const galleryItemImageEl = document.querySelectorAll('.gallery__image'); // изображение внутри ссылки

galleryEl.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  window.addEventListener('keydown', onKeyPress);
  lightboxEl.classList.add('is-open');
  lightboxImageEl.src = event.target.dataset.source;
  lightboxImageEl.alt = event.target.alt;
}

btnCloseModal.addEventListener('click', onCloseModalClick);
lightboxOverlayEl.addEventListener('click', onCloseModalClick);

// функция для закрытия модалки - для клика по кнопке, бэкдропу, клавише escape
function onCloseModalClick(event) {
  window.removeEventListener('keydown', onKeyPress);
  lightboxEl.classList.remove('is-open');
  lightboxImageEl.src = "";
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onBtnCloseModalClick();
  }
  const curIndex = imagesOriginal.indexOf(lightboxImageEl.src);
  const lastIndex = galleryItemImageEl.length - 1;
  if (event.code === 'ArrowLeft') {
    // console.log('Листаем влево');
      if (galleryItemImageEl[curIndex].dataset.source === lightboxImageEl.src && curIndex !== 0) {
        lightboxImageEl.src = galleryItemImageEl[curIndex - 1].dataset.source;
        lightboxImageEl.alt = galleryItemImageEl[curIndex - 1].alt;
      } else {
        lightboxImageEl.src = galleryItemImageEl[lastIndex].dataset.source;
        lightboxImageEl.alt = galleryItemImageEl[lastIndex].alt;
      }
  }
  if (event.code === 'ArrowRight') {
      // console.log('Листаем вправо');
        if (galleryItemImageEl[curIndex].dataset.source === lightboxImageEl.src && curIndex !== 8) {
          lightboxImageEl.src = galleryItemImageEl[curIndex + 1].dataset.source;
          lightboxImageEl.alt = galleryItemImageEl[curIndex + 1].alt;
        } else {
          lightboxImageEl.src = galleryItemImageEl[0].dataset.source;
          lightboxImageEl.alt = galleryItemImageEl[0].alt;
        }
    }
  }