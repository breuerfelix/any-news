import m from 'mithril';
import { NavBar, Footer } from 'components';

export default class Layout {
	view({ children }) {
		return m('.base-layout', [
			m(NavBar),
			m('.content', [
				children
			]),
			m(Footer)
		]);
	}
}
