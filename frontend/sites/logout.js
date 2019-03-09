import m from 'mithril';
import { Store } from 'core';

export default class Logout {
	oncreate() {
		//TODO send logout to server
		Store.set({ loggedIn: false });
	}

	view() {
		return m('.text-content', 'You have been logged out.');
	}
}
