import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

class App extends Component {
	render() {
		return (
			<div className="ui container comments">
				<ApprovalCard>
					<CommentDetail
						author="Robbie"
						timeAgo="Yesterday at 4:00pm"
						image={faker.image.avatar()}
						comment="blah blahc blah"
					/>
				</ApprovalCard>
				<CommentDetail
					author="Dane"
					timeAgo="Yesterday at 3:00am"
					image={faker.image.avatar()}
					comment="blah blahc blah"
				/>
				<CommentDetail
					author="Reggie"
					timeAgo="Monday at 12:00pm"
					image={faker.image.avatar()}
					comment="blah blahc blah"
				/>
				<CommentDetail
					author="Jane"
					timeAgo="Monday at 8:00am"
					image={faker.image.avatar()}
					comment="blah blahc blah"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
