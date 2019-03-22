import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
	const [ resource, setResource ] = useState('Posts');
	return (
		<div className="ui container">
			<div>
				<button onClick={() => setResource('Posts')}>Posts</button>
				<button onClick={() => setResource('Todos')}>Todos</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	);
};

export default App;
