import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import TodoForm from "./todoComponents/TodoForm";
import TodoList from "./todoComponents/TodoForm";
import "./todoComponents/todo.css";
import BlogDetails from "./BlogDetails";
import Blogs from "./Blogs";
import NotFound from "./NotFound";
import popUp from "./popUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/todo">
              <TodoList />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
