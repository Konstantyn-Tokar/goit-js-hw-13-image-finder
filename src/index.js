import './sass/main.scss';
import imageCard from './templates/image_card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  btnLoadMore: document.querySelector('[data-action="load-more"]'),
};

console.log(refs.searchForm);
console.log(refs.btnLoadMore);
