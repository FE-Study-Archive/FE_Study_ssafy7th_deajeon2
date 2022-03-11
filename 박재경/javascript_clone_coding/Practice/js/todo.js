const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  
  // 삭제를 클릭한 li의 id를 갖고 있는 toDo를 지운다. 
  // 클릭한 li.id와 다른 toDo는 배열에 남겨둔다. 
  // toDo.id는 number, li.id는 string이기때문에 변환을 해야 한다. 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  //toDos DB에서 todo를 지운 뒤에 saveToDos 호출
  saveToDos()
  
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  
  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event){
  event.preventDefault();
  
  const newTodo = toDoInput.value; 
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDoInput.value = "";
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
