const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// const makeGalleryElement = galleryItem => {
//   return `
//   <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href= "${galleryItem.original}"
//   >
//     <img
//       class="gallery__image"
//       src= "${galleryItem.preview}"
//       data-source= "${galleryItem.original}"
//       alt="${galleryItem.description}"
//     />
//   </a>
// </li>
//   `
// }

// вернуть в а href= "${galleryItem.original}" чтобы работало также

const makeGalleryElement = galleryItem => {
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
     href= "#"
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

// с кнопкой работает 
// const makeGalleryElement = galleryItem => {
//   return `
//   <button class="gallery__item">
//  кнопка
// </button>
//   `
// }

const galleryEl = document.querySelector('.js-gallery'); //галерея изображений
const lightboxEl = document.querySelector('.lightbox'); //модалка
const lightboxOverlayEl = document.querySelector('.lightbox__overlay'); //бэкдроп/ оверлэй
const btnCloseModal = document.querySelector('.lightbox__button'); //кнопка закрытия модалки
const lightboxImageEl = document.querySelector('.lightbox__image');// изображение большое внутри модалки открытой
const galleryLinkEl = document.querySelector('.gallery__link'); //ссылка


const makeGallery = galleryItems
  .map(makeGalleryElement)
  .join(' ');

galleryEl.insertAdjacentHTML('beforeend', makeGallery);

const galleryItemImageEl = document.querySelectorAll('.gallery__image'); // изображение внутри ссылки

galleryEl.addEventListener('click', onClick);
function onClick(event) {
  // if (event.target.nodeName !== "LI") {
  //   return
  // }
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  window.addEventListener('keydown', onEscPress);
  console.log('Клик по картинке');
  // console.log(event.target.nodeName);
  // console.log(event.target);
  // console.log(event.currentTarget);
  lightboxEl.classList.add('is-open');
    lightboxImageEl.src = event.target.dataset.source;
  lightboxImageEl.alt = event.target.alt;

  // galleryLinkEl.href = event.target.source;
  // lightboxImageEl.src = "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg";
  // lightboxImageEl.alt = "Hokkaido Flower";
  // lightboxImageEl.setAttribute = 'src', "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg";
  // lightboxImageEl.setAttribute = 'alt', "Hokkaido Flower";
  // lightboxImageEl.classList.add('open');
  
}

// lightboxEl.classList.add('is-open');
btnCloseModal.addEventListener('click', onBtnCloseModalClick);

function onBtnCloseModalClick(event) {
  window.removeEventListener('keydown', onEscPress);
  lightboxEl.classList.remove('is-open');
  lightboxImageEl.src = "";
}

lightboxOverlayEl.addEventListener('click', onBtnCloseModalClick);

// function onOverlayClick(event) {
//   console.log('клик по оверлэю');
//   // lightboxEl.classList.remove('is-open');
//   // lightboxImageEl.src = "";
//   console.log(event.currentTarget);
//   console.log(event.target);
// }



function onEscPress(event) {
  if (event.code === 'Escape') {
    onBtnCloseModalClick();
  }
  console.log(event);
  // перебираем массив изображений в списке ул,
  // при нажатии клавиши вправо проверяем срц текущего изображения в модалке равно сорсу какого
  // изображения в списке ул. если равно - то заменяем срц текущего на сорс следующего изображения
  // решить вопрос с индексами чтобы при вычитании и сложении не выходить за рамки 0 - 8
  // if (event.code === 'ArrowLeft') {
  //   console.log('Листаем влево');
  //   galleryItemImageEl.forEach((img, index) => {
  //     console.log(index);
  //     // console.log(galleryItemImageEl[index]);
  //     if (galleryItemImageEl[index].dataset.source === lightboxImageEl.src && index !== 0) {
  //       console.log('True');
  //       console.log(index);
  //       // console.log(galleryItemImageEl[index].dataset.source);
  //       // index += 1;
  //       // console.log(galleryItemImageEl[index].dataset.source);
  //       lightboxImageEl.src = galleryItemImageEl[index - 1].dataset.source;
  //     }
  //     if (galleryItemImageEl[index].dataset.source === lightboxImageEl.src && index === 0) {
  //       lightboxImageEl.src = galleryItemImageEl[8].dataset.source;
  //     }
  //   }
  //   )
    // console.log(galleryEl.nextElementSibling);
    // console.log(galleryItemImageEl[index]);
    // console.log(galleryItemImageEl);
    // console.log(galleryItemImageEl.nextElementSibling);
  // };
  if (event.code === 'ArrowRight') {
    console.log('Листаем вправо');
    galleryItemImageEl.forEach((img, index) => {
      console.log(index);
      // console.log(galleryItemImageEl[index]);
      if (galleryItemImageEl[index].dataset.source === lightboxImageEl.src && index !== 8) {
        console.log('True');
        console.log(index);
        // console.log(galleryItemImageEl[index].dataset.source);
        // index += 1;
        // console.log(galleryItemImageEl[index].dataset.source);
        lightboxImageEl.src = galleryItemImageEl[index + 1].dataset.source;
      }
      if (galleryItemImageEl[index].dataset.source === lightboxImageEl.src && index === 8) {
        lightboxImageEl.src = galleryItemImageEl[0].dataset.source;
      }
    })
    

    // lightboxImageEl.src = event.target.dataset.source;
    //   lightboxImageEl.alt = event.target.alt;

    // const nextEl = lightboxImageEl.nextElementSibling;
    // console.log(nextEl);
    // lightboxImageEl.src = event.nextElementSibling.target.dataset.source;
    //   }
    //   if (event.code === 'ArrowLeft') {
    //     console.log('листаем влево');
    //   }
  }
}
// console.log(galleryEl);
// console.log(galleryItemImageEl[5]);