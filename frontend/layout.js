import * as m from 'mithril';
import store from './store';

export default class Layout {
	view({ children }) {
		const { loggedIn } = store.get();
		const loginRef = loggedIn ? '/#!/logout' : '/#!/login';

		return m('.base-layout', [
			m('.navbar', [
				m('a', { class: 'item left', href: '/#!/' }, 'hot'),
				m('a', { class: 'item left', href: '/#!/recent' }, 'recent'),
				m('a', { class: 'item left', href: loginRef }, loggedIn ? 'logout' : 'login'),
			]),
			children,
			m('.footer', 'footer')
		]);
	}
}
