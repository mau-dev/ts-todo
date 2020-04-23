import React, {useState} from 'react';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import ToDoItem from './components/ToDoItem';

import {AddTodo} from './components/AddToDo';
import './App.css';

export type Todo = {
	content: string;
	completed: boolean;
	id: number;
};

const todosArray: Array<Todo> = [
	{id: 1, content: 'finish the book', completed: false},
	{id: 2, content: 'exercise', completed: false},
	{id: 3, content: 'shop for groceries', completed: true},
	{id: 4, content: 'buy the mongoDB course on udemy before promotion ends', completed: true},
	{id: 5, content: 'learn TypeScript', completed: false},
	{id: 6, content: 'make toDo app', completed: false},
	{id: 7, content: 'make recipe calculator', completed: false}
];

const App: React.FC = () => {
	const [ todos, setTodos ] = useState<Array<Todo>>(todosArray);

	const addTodo: AddTodo = (newToDoItem) => {
		let length = todos.length;
		newToDoItem.trim() !== '' && setTodos([ ...todos, {id: length + 1, content: newToDoItem, completed: false} ]);
	};

	return (
		<div className='App'>
			<AddToDo addTodo={addTodo} />
			<Todos todos={todos} />
		</div>
	);
};

export default App;
