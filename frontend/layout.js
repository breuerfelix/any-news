import m from 'mithril';
import { NavBar } from 'components';

export default class Layout {
	view({ children }) {
		return m('.base-layout', [
			m(NavBar),
			m('.content', [
				children,
				m('.footer', 'footer')
			])
		]);
	}
}
