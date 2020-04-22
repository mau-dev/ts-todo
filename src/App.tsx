import React, {useState} from 'react';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import ToDoItem from './components/ToDoItem';

import './App.css';

export type Todo = {
	content: string;
	completed: boolean;
};

const todos: Array<Todo> = [
	{content: 'finish the book', completed: false},
	{content: 'exercise', completed: false},
	{content: 'shop for groceries', completed: true},
	{content: 'buy the mongoDB course on udemy before promotion ends', completed: true},
	{content: 'learn TypeScript', completed: false},
	{content: 'make toDo app', completed: false},
	{content: 'make recipe calculator', completed: false}
];

const App: React.FC = () => {
	return (
		<div className='App'>
			<AddToDo />
			<Todos todos={todos} />
		</div>
	);
};

export default App;
