import { useState } from "react";

function App() {
  // state는 직접적으로 수정하지 않는다.
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    // ... :언팩 연산자
    setToDos(currentArray => [toDo, ...currentArray])
    
  }
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* 맵의 첫번째 속성으로 해당 아이템을 가져올수 있다. */}
      {/* (value: any, index: number, array: any[]) */}
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default App;