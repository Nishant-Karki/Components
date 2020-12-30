import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Buttons from "./components/Button";
import Cards from "./components/Cards";
import Footer from "./components/Footer/Footer";
import Inputs from "./components/InputFields/Input1";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Cards} />
          <Route exact path="/" component={Buttons} />
          <Route exact path="/" component={Inputs} />
          <Route exact path="/" component={Footer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
