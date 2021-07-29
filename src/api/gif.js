const API_URL = YOUR_GIPHY_KEY;

export default {
  random() {
    return fetch(API_URL).then(response => response.json());
  }
}
