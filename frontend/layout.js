import m from 'mithril';
import { Store } from 'core';
import { Language as lang } from 'other';

export default class Layout {
	view({ children }) {
		const { loggedIn } = Store.get();
		const loginRef = loggedIn ? '/#!/logout' : '/#!/login';

		return m('.base-layout', [
			m('.navbar', [
				m('a', { class: 'item left', href: '/#!/' }, lang.get('hot')),
				m('.divider', '|'),
				m('a', { class: 'item left', href: '/#!/recent' }, lang.get('recent')),
				m('.divider', '|'),
				m('a', { class: 'item left', href: loginRef }, loggedIn ? lang.get('logout') : lang.get('login')),
			]),
			children,
			m('.footer', 'footer')
		]);
	}
}
