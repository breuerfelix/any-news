import { redraw } from 'mithril';

class store {
	constructor() {
		this.state = {
			loggedIn: false
		};
	}

	set(object) {
		this.state = {
			...this.state,
			...object
		};

		redraw();
	}

	get() {
		return this.state;
	}
}

export default new store();
