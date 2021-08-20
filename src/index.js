import './sass/main.scss';
import NewsApiServive from './js/apiService';
import tplImageCard from './templates/image_card.hbs';

// ____________________________refs___________________________________
const refs = {
  searchForm: document.querySelector('#search-form'),
  btnLoadMore: document.querySelector('[data-action="load-more"]'),
  imageGalleryContainer: document.querySelector('.gallery'),
};

function scroll() {
  refs.btnLoadMore.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

const newsApiServive = new NewsApiServive();

// ____________________________EventListener___________________________________

refs.searchForm.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  newsApiServive.query = event.currentTarget.elements.query.value;
  newsApiServive.resetPage();
  newsApiServive.fetchImages().then(appendMurkupImageCard);
}

function onLoadMore() {
  newsApiServive.fetchImages().then(appendMurkupImageCard);
  ``;
}

function appendMurkupImageCard(hits) {
  refs.imageGalleryContainer.insertAdjacentHTML('beforeend', tplImageCard(hits));
  scroll();
}
