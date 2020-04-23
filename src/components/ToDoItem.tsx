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
	const contentStyle = () => {
		return {
			backgroundColor: 'inherit',
			border: 'none',
			outline: 'none',
			textDecoration: todo.completed ? 'line-through' : 'none',
			width: '700px'
		};
	};
	const liStyle = () => {
		return {
			background: '#E2E1E5',
			padding: '10px',
			borderRadius: '4px',
			marginBottom: '4px'
		};
	};

	return (
		<li>
			<div className='todo-item-row' style={liStyle()}>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => toggleCompleted(todo.id)}
					style={{float: 'left'}}
				/>
				{/* {todo.content} */}
				<input
					// style={{backgroundColor: 'inherit', border: 'none', outline: 'none', width: '700px'}}
					style={contentStyle()}
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
