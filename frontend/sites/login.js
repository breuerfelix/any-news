import m from 'mithril';
import store from '../store';

export default class Login {
	oncreate() {
		store.set({ loggedIn: true });
	}

	view() {
		return m('div', 'you have been logged in.');
	}
}
