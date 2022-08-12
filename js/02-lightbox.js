import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createImagesGalleryMarkup = (images) => {
  return images
    .map(({ preview, original, description }) => {
        return `
                <li>
                <a class="gallery__item" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
                </a>
                </li>
        `;
    })
    .join("");
};

const galleryMarkup = createImagesGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);



const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
