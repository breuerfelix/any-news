import { redraw } from 'mithril';

export default class Component {
	oninit() {
		this.state = {};
	}

	setState(newState, doRedraw = true) {
		if(!this.state) throw 'state not defined. initialize in oninit() function.';

		this.state = {
			...this.state,
			...newState
		};

		if(doRedraw) redraw();
	}

}
