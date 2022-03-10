const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];             // 초기에는 빈 array, 그리고 바꿀 수 있도록 let 설정

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));    // localStorage에 todos라는 이름으로 toDos array 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;             // 삭제해야 하는 li를 parentElement를 이용해 조회/저장
  // toDos 배열의 각각의 toDo에 대해 id가 li.id와 다른 것만 남긴다.
  // li.id는 string, toDo.id는 number 이므로 데이터타입 통일시키는 것에 주의
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
  li.remove();                                       // parentElement 제거 
  saveToDos();                                       // li를 제거한 toDos를 localStorage에 저장
}

function paintToDo(newTodoObj) {
  // li와 span 정의
  const li =  document.createElement("li");          // document에 li 만들기
  li.id = newTodoObj.id;                             // li의 id를 newTodoObj의 id로 지정
  const span = document.createElement("span");       // document에 span 만들기       
  span.innerText = newTodoObj.text;                  // span에 newTodoObj의 text 넣기

  // button 정의
  const button = document.createElement("button");   // document에 button 만들기
  button.innerText = "❌";                          // button에 'X' 표시 text 넣기
  button.addEventListener("click", deleteToDo);      // button클릭 시 deleteToDo 함수 실행

  // span, button을 li에, li를 toDoList에 넣기
  li.appendChild(span);                              // li에 span을 넣기
  li.appendChild(button);                            // li에 button 넣기
  toDoList.appendChild(li);                          // toDoList ul에 li 넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();            // 기본동작 제거
  const newTodo = toDoInput.value;   // 입력값을 newTodo에 저장
  toDoInput.value = "";              // 입력공간 값 제거
  const newTodoObj = {               // object 정의
    text: newTodo,                   // newTodo의 key는 text
    id: Date.now(),                  // id를 Date.now()로 두어 랜덤 id 부여
  }
  toDos.push(newTodoObj);            // toDos array에 newTodoObj 추가
  paintToDo(newTodoObj);             // 입력값을 처리
  saveToDos();                       // Submit되면 ToDos를 저장하는 saveToDos 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){                             // JS는 자동으로 item이라는 parameter 추가
  console.log('this is the turn of', item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);  // localStorage의 toDos를 가져와 savedToDos에 저장

if (savedToDos) {                                    // savedToDos에 item이 있다면
  const parsedToDos = JSON.parse(savedToDos);        // parse한 것을 parsedToDos에 저장하고
  toDos = parsedToDos;                               // toDos에 parsedToDos를 저장
  parsedToDos.forEach(paintToDo);                    // 이 각각의 item에 paintToDo 함수 적용
}