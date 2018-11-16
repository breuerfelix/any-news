import m from 'mithril';

import Layout from 'layout';
import { Hot, Recent, Login, Logout } from 'site';

m.route.prefix('#!');
m.route(document.body, '/', {
	'/': {
		render: () => m(Layout, m(Hot))
	},
	'/recent': {
		render: () => m(Layout, m(Recent))
	},
	'/login': {
		render: () => m(Layout, m(Login))
	},
	'/logout': {
		render: () => m(Layout, m(Logout))
	}
});
