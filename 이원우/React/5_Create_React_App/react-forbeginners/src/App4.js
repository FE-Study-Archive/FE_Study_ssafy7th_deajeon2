import styles from "./App4.module.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"; //다른 js폴더들에서 URL주소에 해당하는 페이지별 모듈을 import해와야함.
function App4() {
  return (<BrowserRouter>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  </BrowserRouter>)

}

export default App4;

// App4.js 는 모든 js 모듈을 URL Router로 변환해 페이지별로 가리키도록해서
// index.js에서 ReactDom을 통해 랜더링해 HTML문서로 변환시켜준다.