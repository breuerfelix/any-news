import * as m from 'mithril';
import Layout from './layout';
import Hot from './hot';
import New from './new';

m.render(document.body, '/', {
	'/': {
		render: () => m(Layout, m(Hot))
	},
	'/new': {
		render: () => m(Layout, m(New))
	}
});
