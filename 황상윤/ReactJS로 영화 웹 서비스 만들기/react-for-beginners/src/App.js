import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    // 장고에서 사용한 방법처럼 하위 파일을 생성하고 그파일을 불러올 수 있다.
    <div>
      <h1 className={styles.title}>hello!</h1>
      <Button text={"Continue"}/>
      
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      
    </div>
  );
}

export default App;
