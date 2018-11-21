import m from 'mithril';
import { Store, Component } from 'core';
import { Language as lang } from 'other';

//TODO translate this site
export default class Login extends Component {
	login = () => {

	}

	register = () => {

	}

	view() {
		return m('.text-content', [
			m('.title', 'Login'),
			m(InputForm, {
				label: 'Username',
				oninput: m.withAttr('value', (v) => this.setState({ username: v })),
				value: this.getState('username')
			}),
			m(InputForm, {
				label: 'Password',
				oninput: m.withAttr('value', (v) => this.setState({ password: v })),
				value: this.getState('username'),
				type: 'password'
			}),
			m('button', { onclick: this.login }, 'login'),
			m('.login-divider'),

			m('a', {
				href: '/404',
				oncreate: m.route.link
			}, lang.get('FORGOT_PASSWORD')),

			m('.divider'),
			
			m('.title', 'Create Account'),
			m(InputForm, {
				label: 'Email',
				oninput: m.withAttr('value', (v) => this.setState({ email: v })),
				value: this.getState('email')
			}),
			m(InputForm, {
				label: 'Username',
				oninput: m.withAttr('value', (v) => this.setState({ username: v })),
				value: this.getState('username')
			}),
			m(InputForm, {
				label: 'Password',
				oninput: m.withAttr('value', (v) => this.setState({ password: v })),
				value: this.getState('password'),
				type: 'password'
			}),
			m('button', { onclick: this.register }, 'register'),
		]);
	}
}

class InputForm {
	view({ attrs }) {
		const { label, onclick, value, type = 'text' } = attrs;

		return m('.input-form', [
			m('.label', label + ':'),
			m('input', {
				onclick,
				value,
				type
			})
		]);

	}
}
