import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Card from './card';
import Head from './head';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './nav';
import Login from './login';
import Register from './register';

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/head/:id" component={Head} exact />
            <Route path="/card/:id" component={Card} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
