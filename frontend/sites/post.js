import m from 'mithril';
import Layout from 'layout';
import { Component } from 'core';
import { ListItem } from 'components';
import { getPost } from 'services';
import { Language as lang, getTimeString } from 'other';

export default class Post extends Component {
	state = {
		post: null,
		comment: null
	}

	oninit({ attrs }) {
		const { id } = attrs;
		if(!id) m.route.set('/404');

		const post = getPost(id);

		this.setState({ post });
	}

	addComment = () => {
		const comment = this.getState('comment');
		if(!comment) return;

		const post = this.getState('post');
		console.log(post)

		post.commentList.push({
			id: 'jadsf',
			author: 'felix',
			date: Date.now(),
			points: 10,
			replies: [],
			text: comment.replace('\n', '</br>')
		});

		this.setState({ post });

		// TODO send comment to server
		// TODO sanitize html input
		// TODO enable some html tags like b i
	}

	view() {
		const post = this.getState('post');
		if(!post) return m(Layout, 'loading ...');

		const { commentList } = post;
		const commentViews = commentList.map(comment => m(Comment, { comment }));

		return m(Layout, m('.single-post', [
			m('ul', { class: 'post-list' }, m(ListItem, { post })),
			m('.text-content', [
				m('textarea', {
					rows: 5,
					cols: 50,
					placeholder: lang.get('POST_COMMENT_PLACEHOLDER'),
					oninput: m.withAttr('value', (v) => this.setState({ comment: v })),
					value: this.getState('comment')
				}),
				m('div'),
				m('button', { onclick: this.addComment }, lang.get('POST_ADD_COMMENT')),
				commentViews
			])
		]));
	}
}

class Comment {
	view({ attrs }) {
		const { comment } = attrs;
		const { author, date, text } = comment;

		const timeString = getTimeString(date) + ' ' + lang.get('POST_AGO');

		return m('.comment', [
			m('.info', [
				m('div', lang.get('POST_POSTED_BY') + ' ' + author),
				m('.divider', '|'),
				m('div', timeString)
			]),
			m('.text', m.trust(text))
		]);
	}
}
