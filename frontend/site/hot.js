import m from 'mithril';
import { getHotPosts } from 'service';
import { Component } from 'core';
import { ListItem } from 'component';

export default class Hot extends Component {
	oninit() {
		this.state = {
			posts: []
		};
	}
	
	oncreate() {
		const posts = getHotPosts();
		this.setState({ posts });
	}

	view() {
		const posts = this.state.posts.map((post, index) => m(ListItem, { index: index + 1, post }));

		return m('.hot .list', 	posts);
	}
}
