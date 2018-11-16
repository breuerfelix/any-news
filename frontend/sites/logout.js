import m from 'mithril';
import { Store } from 'core';

export default class Logout {
	oncreate() {
		Store.set({ loggedIn: false });
	}

	view() {
		return m('div', 'you have been logged out.');
	}
}
