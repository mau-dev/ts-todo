import * as React from 'react';
import {ToggleCompleted, DeleteTodo, UpdateTodo} from '../App';

interface ToDoItemProps {
	todo: {
		content: string;
		completed: boolean;
		id: number;
	};
	toggleCompleted: ToggleCompleted;
	deleteTodo: DeleteTodo;
	updateTodo: UpdateTodo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({todo, toggleCompleted, deleteTodo, updateTodo}) => {
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
				{/* {todo.content} */}
				<input
					style={{backgroundColor: 'inherit', border: 'none', outline: 'none', width: '700px'}}
					value={todo.content}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTodo(e, todo.id)}
				/>
				<button className='remove-todo-btn' onClick={() => deleteTodo(todo.id)} style={{float: 'right'}}>
					x
				</button>
			</div>
		</li>
	);
};

export default ToDoItem;
