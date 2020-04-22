import React, {useState, ChangeEvent} from 'react';

const AddToDo: React.FC = () => {
	const [ newToDoItem, setNewToDoItem ] = useState<string>('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewToDoItem(e.target.value);
	};

	const onSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
		e.preventDefault();
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
			<button type='submit' onSubmit={onSubmit}>
				Add To Do{' '}
			</button>
		</form>
	);
};

export default AddToDo;
