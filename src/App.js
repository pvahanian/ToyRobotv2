import "./App.css";

//import components
import InputForm from "./components/InputForm.tsx";
import Console from "./components/Console.tsx";
import Board from "./components/Board.tsx";

function App() {
  return (
    <div className="App">
      <p>Will is the best</p>
      <InputForm />
      <Console />
      <Board />
    </div>
  );
}

export default App;
