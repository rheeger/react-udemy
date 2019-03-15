import { combineReducers } from 'redux';

//Song List reducer
const songReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Hello', duration: '3:00' },
		{ title: 'Call Me Maybe', duration: '2:05' },
		{ title: 'No Diggity', duration: '1:05' }
	];
};

//Selected Song reducer
const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

//Combine reducers
export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
