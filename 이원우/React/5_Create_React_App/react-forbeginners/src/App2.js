import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("hi");
//     return () => console.log("bye");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App2() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

function App2() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My to Do {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write anything to do"
          value={toDo}
          onChange={onChange}
        />
        <button>Add to do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

// export default App2;
