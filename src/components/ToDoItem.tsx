import React from 'react';
import {ToggleCompleted, DeleteTodo} from '../App';

//@to-do next: make edit mode and view mode for single doTo item, by default item is set to view mode,
//item on click (or dbl click) should activate the edit mode and display input text form to edit the existing item

interface ToDoItemProps {
	todo: {
		content: string;
		completed: boolean;
		id: number;
	};
	toggleCompleted: ToggleCompleted;
	deleteTodo: DeleteTodo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({todo, toggleCompleted, deleteTodo}) => {
	const getStyle = () => {
		return {
			background: '#E2E1E5',
			padding: '10px',
			borderRadius: '4px',
			marginBottom: '4px',
			textDecoration: todo.completed ? 'line-through' : 'none'
		};
	};

	return (
		<li>
			<div className='todo-item-row' style={getStyle()}>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => toggleCompleted(todo.id)}
					style={{float: 'left'}}
				/>
				{todo.content}
				<button className='remove-todo-btn' onClick={() => deleteTodo(todo.id)} style={{float: 'right'}}>
					x
				</button>
			</div>
		</li>
	);
};

export default ToDoItem;
