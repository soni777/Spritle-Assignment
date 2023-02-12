import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login";
import Master from "./components/Master";
import StudentPortal from "./components/StudentPortal";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/master" component={Master} />
      <Route exact path="/student" component={StudentPortal} />
    </Switch>
  </BrowserRouter>
);

export default App;
