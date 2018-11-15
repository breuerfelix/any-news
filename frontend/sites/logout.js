import * as m from 'mithril';
import store from '../store';

export default class Logout {
	oncreate() {
		store.set({ loggedIn: false });
	}

	view() {
		return m('div', 'you have been logged out.');
	}
}
