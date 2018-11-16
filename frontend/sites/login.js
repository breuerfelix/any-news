import m from 'mithril';
import { Store } from 'core';

export default class Login {
	oncreate() {
		Store.set({ loggedIn: true });
	}

	view() {
		return m('div', 'you have been logged in.');
	}
}
