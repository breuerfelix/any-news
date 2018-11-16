import m from 'mithril';

export default class ListItem {
	view({ attrs }) {
		const { post, index } = attrs;
		const { title, comments, points, href } = post;

		return m('.item .post', [
			m('.position', index + '.'),
			m('a', {
				class: 'title',
				href,
			},
			title),
			m('.points', points),
			m('.comments', comments)
		]);
	}
}
