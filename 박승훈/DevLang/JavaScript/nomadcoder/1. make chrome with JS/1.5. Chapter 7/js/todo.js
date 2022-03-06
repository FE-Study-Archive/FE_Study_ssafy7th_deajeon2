const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li =  document.createElement("li");     // document에 li 만들기
  const span = document.createElement("span");  // document에 span 만들기       
  li.appendChild(span);                         // li에 span을 넣기
  span.innerText = newTodo;                     // span에 newTodo text 넣기
  toDoList.appendChild(li);                     // toDoList ul에 li 넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();            // 기본동작 제거
  const newTodo = toDoInput.value;   // 입력값을 newTodo에 저장
  toDoInput.value = "";              // 입력공간 값 제거
  paintToDo(newTodo);                // 입력값을 처리
}

toDoForm.addEventListener("submit", handleToDoSubmit)