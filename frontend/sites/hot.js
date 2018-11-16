import m from 'mithril';
import { getHotPosts } from 'services';
import { Component } from 'core';
import { ListItem } from 'components';

export default class Hot extends Component {
	oninit() {
		this.initState({ posts: [] });
	}
	
	oncreate() {
		const posts = getHotPosts();
		this.setState({ posts });
	}

	view() {
		const posts = this.getState('posts').map((post, index) => m(ListItem, { index: index + 1, post }));

		return m('.hot .list', posts);
	}
}
