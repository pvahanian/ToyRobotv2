/**
 * Function: InputForm
 * Param: No params required
 * Goal: Take input and pass it through to checker functions
 */

import React, { useState, FormEvent } from "react";
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
    setRobotData(initInputChecker(splitInputString(input, robotData),oldLocation));
    setInput("");
  };
  
  const defaultStart = () => {
    setOldLocation(String(robotData.x) + String(robotData.y));
    setRobotData({command: "PLACE", error: "", x: 0, y: 0, facing: "NORTH"});
    document.addEventListener('keydown', function(event){
      console.log(event.keyCode)
      // if(event.keyCode===37){
      //   setOldLocation(String(robotData.x) + String(robotData.y));
      //   setRobotData(initInputChecker(splitInputString("left", robotData),oldLocation));
      // }
      // if(event.keyCode===39){
      //   setOldLocation(String(robotData.x) + String(robotData.y));
      //   setRobotData(initInputChecker(splitInputString("right", robotData),oldLocation));
      // }
    })
    // Keys needed
    //   Key: ArrowLeft with keycode 37 has been pressed
    // Key: ArrowUp with keycode 38 has been pressed
    //  Key: ArrowRight with keycode 39 has been pressed
    //  Key: ArrowDown with keycode 40 has been pressed
    

  }

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
        <Console robotData={robotData} />
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
          <button className="goButton">Go</button>
        </form>
      <br/>
      <h3>This enables easy mode</h3>
      <button className="quickStart" onClick={defaultStart} >Start at Place, 0,0, North</button>
      </div>
      <div id="board"></div>
      <Board robotData={robotData} oldLocation={oldLocation} />
    </div>
  );
};

export default InputForm;
