import m from 'mithril';
import { Store } from 'core';
import { Language as lang } from 'other';

export default class NavBar {
	view({ children }) {
		const { loggedIn } = Store.get();
		const loginRef = loggedIn ? '/logout' : '/login';
		const loginIdent = loggedIn ? 'NAVBAR_LOGOUT' : 'NAVBAR_LOGIN';

		return m('ul', { class: 'navbar' }, [
			m(NavBarItem, { classes: 'left', href: '/', ident: 'NAVBAR_HOT' }),
			m('li', { class: 'item divider' }, '|'),
			m(NavBarItem, { classes: 'left', href: '/recent', ident: 'NAVBAR_RECENT' }),
			m(NavBarItem, { classes: 'right', href: loginRef, ident: loginIdent})
		]);
	}
}

class NavBarItem {
	prefix = '/#!';

	view({ attrs }) {
		let { classes, href, ident } = attrs;
		href = this.prefix + href;

		return m('li', { class: `item ${classes}` }, [
			m('a', { href }, lang.get(ident)),
		]);
	}
}
