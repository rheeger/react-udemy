import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		return (
			<div className="actions">
				<Link to="/" className="ui button">
					Cancel
				</Link>
				<button
					onClick={() => this.props.deleteStream(this.props.match.params.id)}
					className="ui button negative"
				>
					Terminate
				</button>
			</div>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return `Terminate Stream:`;
		}

		return `Terminate Stream: "${this.props.stream.title}"`;
	}
	render() {
		return (
			<Modal
				onDismiss={() => history.push(`/`)}
				title={this.renderContent()}
				content="Are you sure you want to end your program?"
				actions={this.renderActions()}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
