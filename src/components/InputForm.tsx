/**
 * Function: InputForm
 * Param: No params required
 * Goal: Take input and pass it through to checker functions
 */

import React, { useState, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import Console from "./Console";
import Board from "./Board";

//import utils
import splitInputString from "../utils/splitInputString";
import initInputChecker from "../utils/initInputChecker";

//import interface
import { RobotData } from "../constants/constants";

const InputForm: React.FC = () => {
  const [input, setInput] = useState("");
  const [robotData, setRobotData] = useState<RobotData>({
    command: "",
    error: "",
    x: null,
    y: null,
    facing: "",
  });
  const [oldLocation, setOldLocation] = useState("");

  /**
   * Function: handleSubmit
   * Goal:    onClick, set InputArrayOfStrings state and setInput back to ""
   */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOldLocation(String(robotData.x) + String(robotData.y));
    // console.log(input==="Place, 0,0, north")
    setRobotData(
      initInputChecker(splitInputString(input, robotData), oldLocation)
    );
    setInput("");
  };
  const handleDefault = () => {
    setOldLocation(String(robotData.x) + String(robotData.y));
    setRobotData(
      initInputChecker(
        splitInputString("Place, 0,0, north", robotData),
        oldLocation
      )
    );
  };

  /**
   * Function: handleChange
   * Goal:    set Input state to user input
   */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="displays">
      <div className="displaySpacer">
        <br></br>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="inputBox"
            name="robotCommands"
            type="text"
            value={input}
            placeholder="Input robot commands!"
          />
          <Button variant="contained" color="primary" className="goButton">
            Go
          </Button>
        </form>
        <br />
        <h3>This enables easy mode</h3>
        <Button
          variant="contained"
          color="primary"
          className="quickStart"
          onClick={handleDefault}
        >
          Quick Start
        </Button>
      </div>
      <div id="showInfo">
        {/* <Console robotData={robotData} /> */}
        <div id="board"></div>
        <Board robotData={robotData} oldLocation={oldLocation} />
      </div>
    </div>
  );
};

export default InputForm;

{/* <h2 className="title-id">Example:</h2>
          <li> 1. Place, 0,0, North</li>
          <li> 2. Move </li>
          <li> 3. Report </li>
          <li> 4. Output: REPORT 0 1 NORTH</li> */}