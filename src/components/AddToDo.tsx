import React, {useState, ChangeEvent, FormEvent} from 'react';

interface AddTodoProps {
	addTodo: AddTodo;
}

export type AddTodo = (newToDoItem: string) => void;

const AddToDo: React.FC<AddTodoProps> = ({addTodo}) => {
	const [ newToDoItem, setNewToDoItem ] = useState<string>('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewToDoItem(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newToDoItem);
		setNewToDoItem('');
	};

	return (
		<form className='add-todo'>
			<input
				type='text'
				name='content'
				value={newToDoItem}
				placeholder='Ex. Finish the book.. '
				onChange={onChange}
			/>
			<button type='submit' onClick={handleSubmit}>
				Add To Do{' '}
			</button>
		</form>
	);
};

export default AddToDo;
