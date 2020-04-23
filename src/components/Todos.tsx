import React from 'react';
import ToDoItem from './ToDoItem';
import {Todo, ToggleCompleted, DeleteTodo} from '../App';

interface TodosProps {
	todos: Array<Todo>;
	toggleCompleted: ToggleCompleted;
	deleteTodo: DeleteTodo;
}

const Todos: React.FC<TodosProps> = ({todos, toggleCompleted, deleteTodo}) => {
	return (
		<ul className='todos-wrap' style={{listStyle: 'none', textAlign: 'left', width: '800px', margin: '0 auto'}}>
			{todos.map((todo) => {
				return <ToDoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />;
			})}
		</ul>
	);
};

export default Todos;
