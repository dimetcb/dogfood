const onResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getProductList() {
    return fetch(`${this._baseUrl}/products`, {
      headers: this._headers,
    }).then(onResponce);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(onResponce);
  }

  search(searchQuery) {
    return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
      headers: this._headers,
    }).then(onResponce);
  }
}

const config = {
  baseUrl: "https://api.react-learning.ru",
  headers: {
    "content-type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzljZWQiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDUsImV4cCI6MTY5OTQ0Nzk0NX0.Qgct1ChEBmrHkHOOU5kDioGyJhdT1Wd6F_9-kImjN5o",
  },
};

const api = new Api(config);

export default api;
