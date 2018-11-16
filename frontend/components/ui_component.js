import m from 'mithril';

export default class UIComponent {
	oncreate() {
		store.set({ loggedIn: true });
	}

	view() {
		return m('div', 'you have been logged in.');
	}
}
