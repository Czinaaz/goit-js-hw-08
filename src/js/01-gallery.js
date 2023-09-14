// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryItemList = document.querySelector('.gallery');


const galleryElements = galleryItems.map(item => `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`).join('');


galleryItemList.innerHTML = galleryElements;


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});