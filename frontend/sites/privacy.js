import m from 'mithril';
import { Language as lang } from 'other';

export default class Privacy {
	view() {
		return m('.text-content', [
			m('.title', lang.get('FOOTER_PRIVACY')),
			m('.text', [
				m('p', 'This is the Internet, you have no privacy here.'),
				m('p', 'Unless you are under 13, in which case you are not allowed here.')
			])
		]);
	}
}
