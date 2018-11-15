import * as m from 'mithril';

class NavBar {
	view() {
		return m('div', 'navbar');
	}
	oncreate() {
		console.log('A ${this.kind} component was created');
	}
}
