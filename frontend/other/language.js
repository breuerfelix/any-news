class Language {
	constructor() {
		this.dict = {
			NAVBAR_HOT: 'hot',
			NAVBAR_RECENT: 'recent',
			NAVBAR_LOGIN: 'login',
			NAVBAR_LOGOUT: 'logout',

			POST_POSTED_BY: 'posted by',
			POST_AGO: 'ago',

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
		};
	}

	get(ident) {
		const translation = this.dict[ident];
		if(!translation) return ident;
		return translation;
	}
}

export default new Language();
