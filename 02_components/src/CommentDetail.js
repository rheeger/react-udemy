import React from 'react';

const CommentDetail = (props) => {
	return (
		<div className="comment" style={{ margin: 20 }}>
			<a href="/" className="avatar">
				<img alt="avatar" src={props.image} />
			</a>
			<div classNam="comment" style={{ marginLeft: 50 }}>
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.comment}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
