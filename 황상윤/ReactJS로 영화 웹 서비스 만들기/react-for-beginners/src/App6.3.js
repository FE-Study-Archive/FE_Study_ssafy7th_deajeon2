import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] =useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  }
  // 코드를 한번만 실행 하도록 보호해줌
  useEffect(() => {
    console.log("CALL THE API")
  }, []);
  //  useEffect(함수, 바라볼 것 => 바라보면 실행)
  useEffect(() => {
    if (keyword != "" && keyword.length > 5)
    console.log("I run when 'keybord' change.", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' change.");
  }, [counter])
  useEffect(() => {
    console.log()
  })
  return (
    // 장고에서 사용한 방법처럼 하위 파일을 생성하고 그파일을 불러올 수 있다.
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      
    </div>
  );
}

export default App;
