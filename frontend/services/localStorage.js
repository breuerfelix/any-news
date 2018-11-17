class LocalStorage {
  #localStorage = null;

  constructor() {
    console.log('hello from localStorage!')
    this.#localStorage = window ? window.localStorage : null;
    if(!this.#localStorage) throw 'no localStorage detected!';
  }

  getItem = (key) => this.#localStorage.getItem(key);

  setItem = (key, value) => this.#localStorage.setItem(key, value);

  removeItem = (key) => this.#localStorage.removeItem(key);
}

export default new LocalStorage();
