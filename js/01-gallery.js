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

galleryContainer.addEventListener("click", onGalleryContainerClick);
window.addEventListener("keydown", onCloseModalByEsc);



function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const galleryOriginImg = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${galleryOriginImg}"width="1200" height="800">`);
    instance.show();

        window.addEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            instance.close();
          }
        });

        window.removeEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            instance.close();
          }
        });
    


}
