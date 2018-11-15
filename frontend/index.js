import * as m from 'mithril';

import Layout from './layout';
import Hot from './sites/hot';
import Recent from './sites/recent';

import Login from './sites/login';
import Logout from './sites/logout';

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
