import m from 'mithril';
import { getHotPosts } from '../services';
import ListItem from '../components/list_item';

export default class Hot {
	oninit() {
		this.posts = [];
	}
	
	oncreate() {
		this.posts = getHotPosts();
		m.redraw();
	}

	view() {
		const posts = this.posts.map(x => m(ListItem, x));

		return m('.hot .list', 	posts);
	}
}
