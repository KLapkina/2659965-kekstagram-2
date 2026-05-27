const photoTemplateElement = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const createThumbnail = (photo) => {
  const currentPhotoElement = photoTemplateElement.cloneNode(true);
  const currentImgElement = currentPhotoElement.querySelector('.picture__img');
  const likesElement = currentPhotoElement.querySelector('.picture__likes');
  const commentsElement =
    currentPhotoElement.querySelector('.picture__comments');
  currentImgElement.src = photo.url;
  currentImgElement.alt = photo.description;
  likesElement.textContent = photo.likes;
  commentsElement.textContent = photo.comments;
  return currentPhotoElement;
};
const renderThumbnails = (allPhotos, photoContainerElement) => {
  photoContainerElement.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const thumbnails = allPhotos.map((photo) => createThumbnail(photo));
  fragment.append(...thumbnails);
  photoContainerElement.append(fragment);
};
export { renderThumbnails };
