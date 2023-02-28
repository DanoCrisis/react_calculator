import './App.css';
import NumberBtn from "./components/NumberBtn";

let screen = []
let setNumbers = []

function App() {
  return (
    <div id="body">
      <div id="calculator-body">
        <div id="screen">
          <p id="screen-text">{screen[0]}</p>
        </div>
        <div id="buttons">
          <NumberBtn></NumberBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
