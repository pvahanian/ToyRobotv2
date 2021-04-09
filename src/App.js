import React from "react";
import "./App.css";
// import { RecoilRoot } from "recoil";

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
              The robot is free to roam around the surface of the table, but
              must be prevented from falling to destruction.
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
              PLACE X,Y,F - will put the toy robot on the table in position X,Y
              and facing NORTH, SOUTH, EAST or WEST.
            </li>
            <li>
              MOVE - will move the toy robot one unit forward in the direction
              it is currently facing.
            </li>
            <li>
              LEFT | RIGHT - will rotate the robot 90 degrees in the specified
              direction without changing the position of the robot.
            </li>
            <li>
              REPORT - will announce the X,Y and F of the robot. This can be in
              any form, but standard output is sufficient.
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
