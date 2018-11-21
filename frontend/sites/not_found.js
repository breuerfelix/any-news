import m from 'mithril';

export default class NotFound {
	view() {
		return m('.text-content', [
			m('.title', 'ERROR #404'),
			m('.text', [
				m('p', 'I find your lack of navigation DISTURBING!'),
			])
		]);
	}
}
