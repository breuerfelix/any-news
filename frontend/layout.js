import m from 'mithril';
import { store } from 'core';
import { translate, localStorage } from 'services';

export default class Layout {
	view({ children }) {
		const { loggedIn } = store.get();
		const loginRef = loggedIn ? '/#!/logout' : '/#!/login';
		
		return m('.base-layout', [
			m('.navbar', [
				m('a', { class: 'item left', href: '/#!/' }, translate('LAYOUT_HOT')),
				m('.divider', '|'),
				m('a', { class: 'item left', href: '/#!/recent' }, translate('LAYOUT_RECENT')),
				m('.divider', '|'),
				m('a', { class: 'item left', href: loginRef }, loggedIn ? translate('LAYOUT_LOGOUT') : translate('LAYOUT_LOGIN')),
			]),
			children,
			m('.footer', 'footer')
		]);
	}
}
