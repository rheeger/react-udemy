import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	if (!song) {
		return <div>Select a Song</div>;
	}
	return (
		<div>
			<h4>Now Playing:</h4>
			<h2>"{song.title}"</h2>
			<p>Duration: {song.duration}</p>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStatetoProps)(SongDetail);
