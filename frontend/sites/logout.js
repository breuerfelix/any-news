import * as m from 'mithril';
import store from '../store';

export default class Logout {
	oninit() {
	}

	view() {
		store.set({ loggedIn: false });
		return m('div', 'you have been logged out.');
	}
}
