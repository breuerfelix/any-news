import m from 'mithril';
import Layout from 'layout';
import { Component } from 'core';
import { ListItem } from 'components';
import { getPost } from 'services';
import { getTimeString, getPointsString } from 'other';
import { translate } from 'services';

export default class Post extends Component {
	oninit({ attrs }) {
		const { id } = attrs;
		if(!id) m.route.set('/404');

		this.initState({
			showReplyInput: true
		});

		const post = getPost(id);

		this.setState({ post });
	}

	addComment = () => {
		const comment = this.getState('comment');
		if(!comment) return;

		const post = this.getState('post');

		post.commentList.push({
			id: 'jadsf',
			author: 'felix',
			date: Date.now(),
			points: 10,
			replies: [],
			text: comment.replace('\n', '</br>')
		});

		this.setState({ post, showReplyInput: false }, false);

		// TODO send comment to server
		// TODO sanitize html input
		// TODO enable some html tags like b i
	}

	view() {
		const { post, showReplyInput } = this.getState();
		if(!post) return m(Layout, 'loading ...');

		const { commentList } = post;
		const commentViews = commentList.map(comment => m(Comment, {
			key: comment.id,
			comment
		}));

		return m(Layout, m('.single-post', [
			m('ul', { class: 'post-list' }, m(ListItem, { post })),
			m('.text-content', [
				showReplyInput ? 
					m(AddComment, {
						onclick: this.addComment,
						value: this.getState('comment'),
						oninputHandler: (v) => this.setState({ comment: v }, false)
					}) : '',
				commentViews
			])
		]));
	}
}

class Comment extends Component {
	oninit({ attrs }) {
		const { comment } = attrs;
		this.initState({ showReplyInput: false, commentValue: null, comment });
	}

	reply = () => {
		this.setState({ showReplyInput: !this.getState('showReplyInput') }, false);
	}

	report = () => {

	}

	voteUp = () => {

	}

	voteDown = () => {

	}

	addComment = () => {
		const { comment, commentValue } = this.getState();
		if(!commentValue) return;

		comment.replies.push({
			id: 'jadsf',
			author: 'felix',
			date: Date.now(),
			points: 10,
			replies: [],
			text: commentValue.replace('\n', '</br>')
		});

		this.setState({ comment, showReplyInput: false }, false);
	}

	view() {
		const { comment } = this.getState();
		const { author, date, text, points, replies } = comment;

		const timeString = getTimeString(date) + ' ' + translate('POST_AGO');
		const repliesViews = replies.map(reply => m(Comment, {
			key: reply.id,
			comment: reply
		}));

		const reply = this.getState('showReplyInput');

		return m('.comment-section', [
			m('.voting', [
				m('.vote-up .link', { onclick: this.voteUp }, '⬆'),
				m('.vote-down .link', { onclick: this.voteDown }, '⬇'),
				m('.v-line')
			]),
			m('.comment', {
			}, [
				m('.comment-content', [
					m('.info', [
						m('div', translate('POST_POSTED_BY') + ' ' + author),
						m('.divider', '|'),
						m('div', getPointsString(points) + ' ' + translate('POST_POINTS')),
						m('.divider', '|'),
						m('div', timeString)
					]),
					m('.text', m.trust(text)),
					m('.info', [
						m('div', {
							class: 'link',
							onclick: this.reply
						}, translate('POST_REPLY')),
						m('.divider'),
						m('div', {
							class: 'link',
							onclick: this.report
						}, translate('POST_REPORT')),
						m('.divider'),
						m('div', {
							class: 'link',
							onclick: this.edit
						}, translate('POST_EDIT'))
					])
				]),
				reply ? m(AddComment, {
					oninputHandler: (v) => this.setState({ commentValue: v }, false),
					onclick: this.addComment,
					value: this.getState('commentValue')
				}) : '',
				m('.replies', repliesViews)
			])
		]);
	}
}

class AddComment {
	view({ attrs }) {
		const { oninputHandler, value, onclick } = attrs;
		return m('div', [
			m('textarea', {
				rows: 5,
				cols: 50,
				placeholder: translate('POST_COMMENT_PLACEHOLDER'),
				oninput: m.withAttr('value', oninputHandler),
				value
			}),
			m('div'),
			m('button', { onclick }, translate('POST_ADD_COMMENT'))
		]);
	}
}
