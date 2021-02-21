import './App.css';
import Navbar from './components/navbar';
import InputForm from './components/inputform';
import Quiz from './components/quiz';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/take-quiz" component={withRouter(Quiz)}></Route>
        <Route path="/" component={withRouter(InputForm)}></Route>
      </Switch>
    </div>
  );
}

export default App;
