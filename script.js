//Variables.
const todoForm = document.querySelector('#todoForm');
const newTodo = document.querySelector('#inputTodoField');
const submitTodo = document.querySelector('#submitTodoButton');
const todoItem = document.querySelector('#newTodoListItem');

//Local Storage Variables.
let todoList = JSON.parse(localStorage.getItem('listItem'));


//Loop through to do list array.
for (let i =0; i<todoList.length; i++) {
   console.log(todoList[i]);
   const createNewTodo = document.createElement('li');
   const newTodoText = document.createElement('span');
   const completeTodo = document.createElement('button');
   const deleteTodo = document.createElement('button');
   completeTodo.innerText = 'Complete';
   deleteTodo.innerText = 'Delete';
   newTodoText.innerText = todoList[i];
   createNewTodo.appendChild(newTodoText);
   createNewTodo.appendChild(completeTodo);
   createNewTodo.appendChild(deleteTodo); 
   todoItem.appendChild(createNewTodo);
};


//"Submit New Todo" button event listener which creates and adds new todo in an unordered list.
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const createNewTodo = document.createElement('li');
    const newTodoText = document.createElement('span');
    const completeTodo = document.createElement('button');
    const deleteTodo = document.createElement('button');
    completeTodo.innerText = 'Complete';
    deleteTodo.innerText = 'Delete';
    newTodoText.innerText = newTodo.value;
    createNewTodo.appendChild(newTodoText);
    createNewTodo.appendChild(completeTodo);
    createNewTodo.appendChild(deleteTodo);
    todoItem.appendChild(createNewTodo);
    newTodo.value = '';
//local storage put to do list items in local storage.
    todoList.push(newTodoText.innerHTML);
    localStorage.setItem('listItem', JSON.stringify(todoList));

});

//"Complete" button event listener which puts line through selected todo item text in unordered list.
newTodoListItem.addEventListener('click', function(event) {
    if(event.target.innerText === 'Complete'){
       event.target.parentElement.firstChild.style.textDecoration = "line-through";
    };
});

//"Delete" button event listener which deletes selected todo item from unordered list.
 newTodoListItem.addEventListener('click', function(event) {
    if(event.target.innerText === 'Delete') {
       const todoText = event.target.parentElement.firstChild.innerText
       todoList = todoList.filter(item => item != todoText)
       localStorage.setItem('listItem', JSON.stringify(todoList));
       event.target.parentElement.remove();
    }
});