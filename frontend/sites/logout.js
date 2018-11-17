import m from 'mithril';
import { store } from 'core';

export default class Logout {
	oncreate() {
		store.set({ loggedIn: false });
	}

	view() {
		return m('div', 'you have been logged out.');
	}
}
