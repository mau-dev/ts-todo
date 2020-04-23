import React from 'react';
import ToDoItem from './ToDoItem';
import {Todo, ToggleCompleted} from '../App';

interface TodosProps {
	todos: Array<Todo>;
	toggleCompleted: ToggleCompleted;
}

const Todos: React.FC<TodosProps> = ({todos, toggleCompleted}) => {
	return (
		<ul className='todos-wrap' style={{listStyle: 'none', textAlign: 'left', width: '800px', margin: '0 auto'}}>
			{todos.map((todo) => {
				return <ToDoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />;
			})}
		</ul>
	);
};

export default Todos;
