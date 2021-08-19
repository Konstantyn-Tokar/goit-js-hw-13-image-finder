const API_KEY = '22999398-db9a08a82e46fc49ff445f160';
const BASE_URL = 'https://pixabay.com/api/';

class apiServive {
  constructor() {}
  getImages() {
    const url = `${BASE_URL}?key=${API_KEY}&editors_choice=true${SETTING_IMG}&per_page=1&page=1`;
  }
}
