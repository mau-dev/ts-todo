import React from 'react';
import logo from '../images/hackwagon-logo.jpg';
import {ToggleModal} from '../../App';
import { Button,  Modal } from 'reactstrap';

interface ToolbarProps {
	toggleModal: ToggleModal;
}

const Toolbar: React.FC<ToolbarProps>  = ({ toggleModal}) => {
	

	return (
		<div className="toolbar">
            <img src={logo} className='logo' alt='logo' />
            <Button toggleModal={toggleModal} type="button" title="New To Do" onClick={toggleModal} className="add-todo-btn" >
			<i className="fas fa-plus"></i>

			</Button>
            </div>
	);
};

export default Toolbar;
