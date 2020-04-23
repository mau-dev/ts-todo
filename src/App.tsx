import React, {useState} from 'react';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import ToDoItem from './components/ToDoItem';

import {AddTodo} from './components/AddToDo';
import './App.css';

export type Todo = {
	content: string;
	completed: boolean;
};

const todosArray: Array<Todo> = [
	{content: 'finish the book', completed: false},
	{content: 'exercise', completed: false},
	{content: 'shop for groceries', completed: true},
	{content: 'buy the mongoDB course on udemy before promotion ends', completed: true},
	{content: 'learn TypeScript', completed: false},
	{content: 'make toDo app', completed: false},
	{content: 'make recipe calculator', completed: false}
];

const App: React.FC = () => {
	const [ todos, setTodos ] = useState<Array<Todo>>(todosArray);

	const addTodo: AddTodo = (newToDoItem) => {
		newToDoItem.trim() !== '' && setTodos([ ...todos, {content: newToDoItem, completed: false} ]);
	};

	return (
		<div className='App'>
			<AddToDo addTodo={addTodo} />
			<Todos todos={todos} />
		</div>
	);
};

export default App;
