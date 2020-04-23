import React from 'react';
import ToDoItem from './ToDoItem';
import {Todo, ToggleCompleted, DeleteTodo, UpdateTodo} from '../App';

interface TodosProps {
	todos: Array<Todo>;
	toggleCompleted: ToggleCompleted;
	deleteTodo: DeleteTodo;
	updateTodo: UpdateTodo;
}

const Todos: React.FC<TodosProps> = ({todos, toggleCompleted, deleteTodo, updateTodo}) => {
	return (
		<ul className='todos-wrap' style={{listStyle: 'none', textAlign: 'left', width: '800px', margin: '0 auto'}}>
			{todos.map((todo) => {
				return (
					<ToDoItem
						key={todo.id}
						todo={todo}
						toggleCompleted={toggleCompleted}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
					/>
				);
			})}
		</ul>
	);
};

export default Todos;
