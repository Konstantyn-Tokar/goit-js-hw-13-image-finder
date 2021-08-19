import './sass/main.scss';
import NewsApiServive from './js/apiService';
import imageCard from './templates/image_card.hbs';

// ____________________________refs___________________________________
const refs = {
  searchForm: document.querySelector('#search-form'),
  btnLoadMore: document.querySelector('[data-action="load-more"]'),
};

const newsApiServive = new NewsApiServive();

// ____________________________EventListener___________________________________

refs.searchForm.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  newsApiServive.query = event.currentTarget.elements.query.value;
  newsApiServive.resetPage();
  newsApiServive.fetchArticles();
}

function onLoadMore() {
  newsApiServive.fetchArticles();
}
