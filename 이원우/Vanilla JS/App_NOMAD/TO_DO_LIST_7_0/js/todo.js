const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = 'todos';

let toDos = [];

function savetoDos(){ //localstorage에 문자열로 array를 저장함.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; //string 타입임.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //id가 다른 것들은 True로 남겨둔 새로운 todos 배열 생성.
  savetoDos();
}

function paintTodo(newTodo) { //element들을 만들어서 자식요소로 집어넣고 그 안에서 delete버튼을 만들어 삭제까지 함.
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText="X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); 
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  savetoDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)



const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo); //함수내의 모든 요소들을 하나하나 꺼내와 실행. (item) => console.log("this is turn of item", item)
}
