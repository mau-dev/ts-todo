import * as React from 'react';
import {ToggleCompleted, DeleteTodo, UpdateTodo} from '../App';
import { Button } from 'reactstrap';

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
			// background: '#F5F6F8',
			// background: 'white',
			backgroundColor: todo.completed ? '#F5F6F8' : 'white',
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
					style={{float: 'left', marginTop: '5px', marginRight: '12px'}}
				/>
				{/* {todo.content} */}
				<input
					// style={{backgroundColor: 'inherit', border: 'none', outline: 'none', width: '700px'}}
					style={contentStyle()}
					value={todo.content}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTodo(e, todo.id)}
				/>
				<Button className='remove-todo-btn' onClick={() => deleteTodo(todo.id)}>
					x
				</Button>
			</div>
		</li>
	);
};

export default ToDoItem;
