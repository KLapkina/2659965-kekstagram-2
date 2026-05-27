import { createDescriptionsPhotoArray } from './generate-objects.js';
import { renderThumbnails } from './render-thumbnails.js';
const photoContainerElement = document.querySelector('.pictures.container');
const allPhotos = createDescriptionsPhotoArray();
renderThumbnails(allPhotos, photoContainerElement);
