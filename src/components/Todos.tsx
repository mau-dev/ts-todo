import React from 'react';
import ToDoItem from './ToDoItem';
import {Todo} from '../App';

interface TodosProps {
	todos: Array<Todo>;
}

const Todos: React.FC<TodosProps> = ({todos}) => {
	return (
		<ul className='todos-wrap'>
			{todos.map((todo) => {
				return <ToDoItem key={todo.id} todo={todo} />;
			})}
		</ul>
	);
};

export default Todos;
