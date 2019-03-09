import m from 'mithril';
import { translate } from 'services';

export default class Privacy {
	view() {
		return m('.text-content', [
			m('.title', translate('FOOTER_PRIVACY')),
			m('.text', [
				m('p', 'This is the Internet, you have no privacy here.'),
				m('p', 'Unless you are under 13, in which case you are not allowed here.')
			])
		]);
	}
}
