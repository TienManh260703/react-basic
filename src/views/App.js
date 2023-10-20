import logo from "./logo.svg";
import "./App.scss";
import Mycomponent from "./Exemple/Mycomponent";

/**
 * 2 components : class component / funcition componnent
 *
 *
 *
 */
// const App =() =>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Mycomponent></Mycomponent>
      </header>
    </div>
  );
}

export default App;
