import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
import useLocation from './useLocation';

const App = () => {
	const [ lat, errorMessage ] = useLocation();

	let content;
	if (errorMessage) {
		content = <div>Error: {errorMessage}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Loading message="trying to find yo ass..." />;
	}
	return <div>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
