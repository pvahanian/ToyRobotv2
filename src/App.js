import React from "react";
import "./App.css";

//import components
import InputForm from "./components/InputForm.tsx";

function App() {
  return (
    <div className="App">
      <div id="description">
        <h2 className="title-id">Description</h2>
        <ul>
          <li>
            The application is a simulation of a toy robot moving on a square
            tabletop, of dimensions 5 units x 5 units.
          </li>
          <li>There are no other obstructions on the table surface.</li>
          <li>
            The robot is free to roam around the surface of the table, but must
            be prevented from falling to destruction.
          </li>
          <li>
            Any movement that would result in the robot falling from the table
            must be prevented, however further valid movement commands must
            still be allowed.
          </li>
        </ul>
        <h2 className="title-id">How to operate the robot </h2>
        <ul>
          <li>
            USE:  Up Arrow to move, LEFT and RIGHT arrows to change direction
          </li>
          </ul>
      </div>
      <div id="bottomHalf">
        <div>
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default App;
