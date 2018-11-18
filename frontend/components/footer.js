import m from 'mithril';
import { Language as lang } from 'other';

export default class Footer {
	view() {
		const githubLink = 'https://github.com/scriptworld-git/any-news';
		return m('.footer', [
			m('.divider'),
			m('ul', {
				class: 'footer list'
			}, [
				m(FooterLink, { href: githubLink, ident: 'FOOTER_GITHUB' }),
				m('li', { class: 'item link-divider' }, '|'),
				m(FooterLink, { href: '/#!/legal', ident: 'FOOTER_PRIVACY_POLICY' }),
				m('li', { class: 'item link-divider' }, '|'),
				m(FooterLink, { href: '/#!/contact', ident: 'FOOTER_CONTACT' }),
			])
		]);
	}
}

class FooterLink {
	view({ attrs }) {
		const { href, ident } = attrs;

		return m('li', { class: 'item' }, [
			m('a', { href }, lang.get(ident)),
		]);
	}
}
