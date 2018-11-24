import localStorage from './localStorage';

class Language {
  #table = null;

  constructor() {
    this.#table = Language.getTable(localStorage.getItem('languageToken'));
  }

  translate = (token) => this.#table[token];
}

Language.getTable = (language) => {
  try {
    // make GET request
    throw 'no valid response';
  } catch (err) {
    return Language.defaultTable;
  }
}

Language.defaultTable = {
  'LAYOUT_LOGIN': 'Login', 
  'LAYOUT_LOGOUT': 'Logut', 
  'LAYOUT_HOT': 'Hot',
  'LAYOUT_RECENT': 'Recent',
}

export default new Language().translate;