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

	getPointsString(points) {
		let pointsNumber = Number(points);
		if(pointsNumber < 1000) return pointsNumber;
		return Math.round(pointsNumber / 100) / 10 + 'k';
	}

	getSourceString(href) {
		// extracts hostname
		const matches = href.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
		let source = matches && matches[1]; 
		let split = source.split('.');
		if(split.length <= 2) return source;

		// removes subdomain prefix
		split.shift();
		return split.join('.');
	}

	upVote = () => {
		console.log('upvote');

	}

	downVote = () => {
		console.log('downvote');

	}

	view({ attrs }) {
		const { post, index } = attrs;
		const { id, title, date, comments, points, href, author } = post;

		const time = this.getTimeString(date) + ' ' + lang.get('POST_AGO');
		const commentString = this.getCommentString(comments);
		const pointsString = this.getPointsString(points);
		const source = this.getSourceString(href);
		
		return m('li', { class: 'item post' }, [
			m('.container-points', [
				m('.points', pointsString),
				m('.buttons', [
					m('div', {
						class: 'down button',
						onclick: this.upVote
					}, '⬆'),
					m('div', {
						class: 'down button',
						onclick: this.downVote
					}, '⬇')
				])
			]),
			m('.container-content', [
				m('.title', [
					m('a', {
						class: 'link',
						href,
						target: '_blank'
					},
					title),
					m('div', {
						class: 'source',
					},
					`(${source})`),
				]),
				m('.subtitle', [
					m('a', {
						class: 'author',
						href: `/#!/user/${author}`
					}, `${lang.get('POST_POSTED_BY')} ${author}`),
					m('.divider', ' | '),
					m('div', {
						class: 'time'
					}, time),
					m('.divider', ' | '),
					m('a', {
						class: 'comments',
						href: `/#!/posts/${id}`
					}, commentString)
				])
			]),
		]);
	}
}
