import { redraw } from 'mithril';

class Store {
	constructor() {
		this.state = {
			loggedIn: false
		};
	}

	set(newState) {
		this.state = {
			...this.state,
			...newState
		};

		redraw();
	}

	get() {
		return this.state;
	}
}

export default new Store();
