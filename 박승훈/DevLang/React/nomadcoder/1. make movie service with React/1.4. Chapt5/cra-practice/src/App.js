import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
	return (
		<Router>
			{/* Switch : Route(URL)를 찾는 역할 */}
			<Switch>
				{/* Detail Route 컴포넌트 URL 의미 */}
				<Route path="/movie/:id">
					<Detail />
				</Route>

				{/* Home Route 컴포넌트 URL 의미 */}
				<Route path="/">
					{/* Home Route 컴포넌트 render */}
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
