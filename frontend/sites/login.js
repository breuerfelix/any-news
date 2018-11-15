import * as m from 'mithril';
import store from '../store';

export default class Login {
	oninit() {
	}

	view() {
		store.set({ loggedIn: true });
		return m('div', 'you have been logged in.');
	}
}
