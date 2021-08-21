import './sass/main.scss';
import NewsApiServive from './js/apiService';
import tplImageCard from './templates/image_card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  btnLoadMore: document.querySelector('[data-action="load-more"]'),
  imageGalleryContainer: document.querySelector('.gallery'),
  btnScrollTop: document.querySelector('.up'),
};

const newsApiServive = new NewsApiServive();

refs.searchForm.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', onLoadMore);
refs.btnScrollTop.addEventListener('click', scrollTop);

function onSearch(event) {
  event.preventDefault();
  if (event.currentTarget.elements.query.value === '') {
    clearImageGalleryContainer();
    return;
  }
  newsApiServive.query = event.currentTarget.elements.query.value;
  newsApiServive.resetPage();
  newsApiServive.fetchImages().then(hits => {
    clearImageGalleryContainer();
    appendMurkupImageCard(hits);
  });
}

function onLoadMore() {
  if (refs.imageGalleryContainer.textContent === '') {
    return;
  }
  newsApiServive.fetchImages().then(appendMurkupImageCard);
}

function appendMurkupImageCard(hits) {
  refs.imageGalleryContainer.insertAdjacentHTML('beforeend', tplImageCard(hits));
  console.log(newsApiServive.page);
  if (newsApiServive.page !== 2) {
    scroll();
  }
}

function clearImageGalleryContainer() {
  refs.imageGalleryContainer.innerHTML = '';
}

function scroll() {
  refs.btnLoadMore.scrollIntoView({});
}

function scrollTop() {
  refs.searchForm.scrollIntoView({});
}
