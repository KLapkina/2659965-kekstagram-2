/* eslint-disable no-console */
import { createDescriptionsPhotoArray } from './generate-objects.js';
import { renderThumbanails } from './renders-thumbnails.js';
console.log(
  'Массив из сгенерированный 25-ти объектов:',
  JSON.stringify(createDescriptionsPhotoArray(), null, 2),
);
renderThumbanails();
