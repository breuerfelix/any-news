import m from 'mithril';
import { Store } from 'core';
import { Language as lang, settings } from 'other';

export default class NavBar {
	view() {
		const { loggedIn } = Store.get();
		const loginRef = loggedIn ? '/logout' : '/login';
		const loginIdent = loggedIn ? 'NAVBAR_LOGOUT' : 'NAVBAR_LOGIN';

		return m('ul', { class: 'navbar' }, [
			m('li', { class: 'item left' }, [
				m('a', { class: 'title', href: '/', oncreate: m.route.link }, settings.title)
			]),
			m(NavBarItem, { classes: 'left', href: '/', ident: 'NAVBAR_HOT' }),
			m('li', { class: 'item divider' }, '|'),
			m(NavBarItem, { classes: 'left', href: '/recent', ident: 'NAVBAR_RECENT' }),
			m('li', { class: 'item divider' }, '|'),
			m(NavBarItem, { classes: 'left', href: '/submit', ident: 'NAVBAR_SUBMIT' }),
			m(NavBarItem, { classes: 'right', href: loginRef, ident: loginIdent})
		]);
	}
}

class NavBarItem {
	view({ attrs }) {
		let { classes, href, ident } = attrs;

		return m('li', { class: `item ${classes}` }, [
			m('a', { href, oncreate: m.route.link }, lang.get(ident)),
		]);
	}
}
