import { createDescriptionsPhotoArray } from './generate-objects.js';
const photoTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const photoContainer = document.querySelector('.pictures.container');
const allPhotos = createDescriptionsPhotoArray();
const fragment = document.createDocumentFragment();
const renderThumbanails = () => {
  for (const photo of allPhotos) {
    const currentPhoto = photoTemplate.cloneNode(true);
    const currentImg = currentPhoto.querySelector('.picture__img');
    const likes = currentPhoto.querySelector('.picture__likes');
    const comments = currentPhoto.querySelector('.picture__comments');
    currentImg.src = photo.url;
    currentImg.alt = photo.description;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments;
    fragment.appendChild(currentPhoto);
  }
  return photoContainer.append(fragment);
};
export { renderThumbanails };
