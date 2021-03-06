import React, {useState, ChangeEvent, FormEvent} from 'react';
import {ToggleModal} from '../App';

interface AddTodoProps {
	addTodo: AddTodo;
	toggleModal: ToggleModal;
}

export type AddTodo = (newToDoItem: string) => void;

const AddToDo: React.FC<AddTodoProps> = ({addTodo, toggleModal}) => {
	const [ newToDoItem, setNewToDoItem ] = useState<string>('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewToDoItem(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newToDoItem);
		setNewToDoItem('');
		toggleModal(e);
		
	};

	return (
		<form className='add-todo-form '>
			<input
				type='text'
				name='content'
				value={newToDoItem}
				placeholder='Ex. Finish the book.. '
				onChange={onChange}
			/>
			<button type='submit' onClick={handleSubmit} >
				Add To Do{' '}
			</button>
		</form>
	);
};

export default AddToDo;
