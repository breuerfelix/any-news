import 'styles/main.css';

import m from 'mithril';

import Layout from 'layout';
import { Hot, Recent, Login, Logout, Privacy, NotFound, Post } from 'sites';

m.route.prefix('#!');
m.route(document.body, '/', {
	'/': {
		render: () => m(Layout, m(Hot))
	},
	'/post/:id': Post,
	'/recent': {
		render: () => m(Layout, m(Recent))
	},
	'/privacy': {
		render: () => m(Layout, m(Privacy))
	},
	'/login': {
		render: () => m(Layout, m(Login))
	},
	'/logout': {
		render: () => m(Layout, m(Logout))
	},
	'/:404...': {
		render: () => m(Layout, m(NotFound))
	}
});
