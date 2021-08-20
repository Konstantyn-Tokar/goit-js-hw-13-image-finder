const API_KEY = '22999398-db9a08a82e46fc49ff445f160';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiServive {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    // console.log(this);
    return fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&per_page=12&page=${this.page}&key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        // console.log(this);

        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
