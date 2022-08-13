import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");

const createImagesGalleryMarkup = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `
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
    })
    .join("");
};

const galleryMarkup = createImagesGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: (instance) => {
    window.addEventListener("keydown", onEscapeClick);
  },
  onClose: (instance) => {
    window.removeEventListener("keydown", onEscapeClick);
  },
});

const onEscapeClick = (evt) => {
  if (evt.code === "Escape") {
    instance.close();
  }
};

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    instance.element().querySelector("img").src = evt.target.dataset.source;
    instance.show();
}
