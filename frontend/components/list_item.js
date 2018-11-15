import m from 'mithril';

export default class Hot {
	view({ attrs }) {
		const { title, comments, points, href } = attrs;

		return m('div', [
			m('a', {
				class: 'item',
				href,
			},
			title)
		]);
	}
}
