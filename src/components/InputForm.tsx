/**
 * Function: InputForm
 * Param: No params required
 * Goal: Take input and pass it through to checker functions
 */

import React, { useState, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import Board from "./Board";

//import utils
import splitInputString from "../utils/splitInputString";
import initInputChecker from "../utils/initInputChecker";

//import interface
import { RobotData } from "../constants/constants";

//Delete later
import turnLeft from '../utils/turnLeft'
import turnRight from '../utils/turnRight'
import moveOnBoard from '../utils/moveOnBoard'

const InputForm: React.FC = () => {
  const [input, setInput] = useState("");
  const [robotStart, setRobotStart] =useState(true)
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
    console.log(input)
    setRobotData(
      initInputChecker(splitInputString(input, robotData), oldLocation)
    );
    setInput("");
  };

  /**
   * Function: HandleDefault
   * Goal:    this will move to be the default login for the place on board and movement.  Once robot is placed on board the button will be disabled to not reset robot



   */
    const handleDefault = () => {
    if(robotStart){
    setOldLocation(String(robotData.x) + String(robotData.y));
    setRobotData(initInputChecker(splitInputString("Place, 0,0, north", robotData),oldLocation));
    
    document.addEventListener('keydown', function(event){
       if(event.keyCode===37){
        setOldLocation(String(robotData.x) + String(robotData.y));
        const runthis = () => {
          let newFacing = turnLeft(robotData)
          setRobotData({
            ...robotData,
            facing:newFacing.facing,
          })
        }
        runthis()
        setInput("")
      }
        if(event.keyCode===38){
        setOldLocation(String(robotData.x) + String(robotData.y));
        const runthis = () => {
          let newSpot = moveOnBoard(robotData)
          setRobotData({
            ...robotData,
            x:newSpot.x,
            y:newSpot.y,
          })
        }
        runthis()
        setInput("")
      }
       if(event.keyCode===39){
        setOldLocation(String(robotData.x) + String(robotData.y));
        const runthis = () => {
          let newFacing = turnRight(robotData)
          setRobotData({
            ...robotData,
            facing:newFacing.facing,
          })
        }
        runthis()
        setInput("")
      }
    })
    setRobotStart(false)
    }
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
        {/* <form > onSubmit={handleSubmit} 
          <input
            onChange={handleChange}
            className="inputBox"
            name="robotCommands"
            type="text"
            value={input}
            placeholder="Input robot commands!"
          />
          <Button variant="contained" color="primary" className="goButton" onClick={handleSubmit}>
            Go
          </Button>
        </form> 
        */}
        <br />
        <h3>Place Robot on the Board</h3>
        <div className="arrow bounce"></div>
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
        <div id="board"></div>
        <Board robotData={robotData} oldLocation={oldLocation} />
      </div>
    </div>
  );
};

export default InputForm;