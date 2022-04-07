// import Button from "./Button";
// import styles from "./App.module.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("i run all the time");
//   const iRunOnlyOnce = () => {
//     console.log("i run only one time");
//   };
//   useEffect(() => {
//     console.log("call the API");
//   }, []);
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5)  {
//       console.log("SEARCH FOR", keyword);
//     }
//   }, [keyword]); //keyword가 바뀌면 이 코드를 1회 실행함.

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <Button onClick={onClick} text="click me" />
//     </div>
//   );
// }

// export default App;
