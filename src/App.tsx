import React from 'react';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';

import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>app main </h1>
			<AddToDo />
			<Todos />
		</div>
	);
}

export default App;
