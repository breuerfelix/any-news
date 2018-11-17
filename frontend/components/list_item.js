import m from 'mithril';
import { Language as lang } from 'other';

export default class ListItem {
	getTimeString(date) {
		const dateNumber = Number(date);
		const now = Number(Date.now());
		let dateDiff = now - dateNumber;

		dateDiff = this.doSomething(dateDiff, 1000, 60, 'SECOND');
		if(typeof dateDiff == 'string') return dateDiff;
		dateDiff = this.doSomething(dateDiff, 60, 60, 'MINUTE');
		if(typeof dateDiff == 'string') return dateDiff;
		dateDiff = this.doSomething(dateDiff, 60, 24, 'HOUR');
		if(typeof dateDiff == 'string') return dateDiff;
		dateDiff = this.doSomething(dateDiff, 24, 30, 'DAY');
		if(typeof dateDiff == 'string') return dateDiff;
		dateDiff = this.doSomething(dateDiff, 30, 12, 'MONTH');
		if(typeof dateDiff == 'string') return dateDiff;

		// convert to years
		dateDiff = Math.floor(dateDiff / 12);
		if(dateDiff == 1) return `${dateDiff} ${lang.get('YEAR')}`;

		return `${dateDiff} ${lang.get('YEARS')}`;
	}

	doSomething(value, first, second, langString) {
		let diff = Math.floor(Number(value) / Number(first));
		if(diff > 1) langString += 'S';

		if(diff / second < 1) return `${diff} ${lang.get(langString)}`;
		return diff;
	}

	getCommentString(comments) {
		const numComments = Number(comments);
		if(numComments > 1) return comments + ' ' + lang.get('COMMENTS');
		if(numComments <= 0) return lang.get('NO') + ' ' + lang.get('COMMENTS');
		if(numComments == 1) return comments + ' ' + lang.get('COMMENT');
	}

	view({ attrs }) {
		const { post, index } = attrs;
		const { title, date, comments, points, href, source, author } = post;

		const time = this.getTimeString(date) + ' ' + lang.get('POST_AGO');
		const commentString = this.getCommentString(comments);

		return m('li', { class: 'item post' }, [
			m('.container-points', [
				m('.points', points),
				m('.buttons', [
					m('.up .button', '▲'),
					m('.down .button', '▼')
				])
			]),
			m('.container-content', [
				m('.title', [
					m('a', {
						class: 'link',
						href,
					},
					title),
					m('a', {
						class: 'source',
						href: source
					},
					`(${source})`),
				]),
				m('.subtitle', [
					m('.author', `${lang.get('POST_POSTED_BY')} ${author}`),
					m('.divider', ' | '),
					m('.time', time),
					m('.divider', ' | '),
					m('.comments', commentString)
				])
			]),
		]);
	}
}
