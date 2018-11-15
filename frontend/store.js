import { redraw } from 'mithril';

class store {
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

export default new store();
