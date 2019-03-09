import { redraw } from 'mithril';

class Store {
	#state = {};

	constructor() {
		this.set(Store.default);
	}

	set(newState) {
		this.#state = {
			...this.#state,
			...newState
		};
	
		redraw();
	}

	get(key=null) { return key ? this.#state[key] : this.#state; };
}

Store.default = {
	loggedIn: false
}

export default new Store();
