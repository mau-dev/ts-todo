ToDo app.

## Technologies used
* React.js
* TypeScript

## Installation
* Install Node.js
* clone or download the repo

## Install dependencies
### `npm install`

## Run on local environment
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Features
* User can add new ToDo by clicking on the plus icon located at the side toolbar
* The modal will pop up with the form for new todo item. When submitting the form by clicking the add todo button, the modal will close and the todo item will be added to the todo list.
* ToDo item can be marked as completed or unmark already completed item, bu toggling the checkbox.
* ToDo item can be edited by clicking on the existing text.
* Delete each todo by clicking on the x button on the right. 

## Preview

![wireFrames](https://github.com/mau-dev/ts-todo/blob/master/todo-screenshot.png)

## Approach
* I started with create-react-app with typescript, and initialising and connecting the components needed for such an application:
   * the main App component
   * ToDoItem component for single todo item
   * ToDos component for all list items
   * AddToDo with the toDo item form

* I created the interfaces to define the props, and the types for all components and event handlers used.
*A single todo item has todo props, which defined in types include the text (content: string), the completetion state (completed: boolean) and id: number.
    * It also has a checkmark that toggles the toggleCompleted method which works by comparing the id of the selected todo item with the items from the todo array, and update the state of completed to true if was false or to false if it was a true.
    * The content of the ToDo itself is a input form and has an onChange event that handle the updateTodo method. So if the content of the existing toDo item is clicked the event is trigered, the clicked todo item id is searched in the todo items array, the input form onChange is trigered and the content can be updated.
    * Lastly the todo item has a delete buton represented with X symbol. Thare is an  olClick event that handles the deleteTodo method, which filters the todo items array, and removing the selected todo by id. Then setting the array to the value of the the updated todos.
* There is an array with initial todos, and I render them from the todos component by maping over the todos array, and render a single todo item component for every todo existing in the array. Tho todos props are defined with todos:array, and the toggleCompleted, deleteCompleted and updateTodo methods passed from the app component.
* the add toDo form contains an input form with an onChange handler, and a button to submit. When I updated the UI at the end, I hide this form from the initial interface.
* I styled lastly with layout components. A static Navbar and a Toolbar. Such an interface will be usefull if the todo app grows and has "favorites" or "important" or by date marked todos, so from the left fool bar, can be navigated to render only completed todos, only uncompleted todos, important todos etc..
By now the toolbar has only a + button that represents the Add new toDo method.On click, it toggles a modal, The modal with the form pop ups on the top , user types, on submit the modal disappears again, the item is added to the list.
* At the very end I worked on the styles. Because it was a very little CSS I only placed everything in one stylesheet. In a better case I could have used SASS, nest the styles, make variables for repetitive colors spaces etc.

