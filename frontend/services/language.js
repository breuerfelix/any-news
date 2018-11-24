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
      NAVBAR_HOT: 'hot',
      NAVBAR_RECENT: 'recent',
      NAVBAR_LOGIN: 'login',
      NAVBAR_LOGOUT: 'logout',
      NAVBAR_SUBMIT: 'submit',

      FOOTER_GITHUB: 'any-news',
      FOOTER_PRIVACY: 'Privacy Policy',
      FOOTER_CONTACT: 'Contact',

      POST_POSTED_BY: 'posted by',
      POST_AGO: 'ago',
      POST_COMMENT_PLACEHOLDER: 'share your thoughts',
      POST_ADD_COMMENT: 'add comment',
      POST_POINTS: 'points',
      POST_REPLY: 'reply',
      POST_REPORT: 'report',
      POST_EDIT: 'edit',

      SECOND: 'second',
      SECONDS: 'seconds',
      MINUTE: 'minute',
      MINUTES: 'minutes',
      HOUR: 'hour',
      HOURS: 'hours',
      DAY: 'day',
      DAYS: 'days',
      MONTH: 'month',
      MONTHS: 'months',
      YEAR: 'year',
      YEARS: 'years',

      NO: 'no',
      COMMENT: 'comment',
      COMMENTS: 'comments',
      DISCUSS: 'discuss',

      FORGOT_PASSWORD: 'Forgot your password?',
    };

export default new Language().translate;