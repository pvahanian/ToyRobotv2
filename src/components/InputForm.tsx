/**
 * Function: InputForm
 * Param: No params required
 * Goal: Take input and pass it through to checker functions
 */

import React, { useState, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import Board from "./Board";
import KeyBoard from './KeyBoard'

//import utils
import splitInputString from "../utils/splitInputString";
import initInputChecker from "../utils/initInputChecker";
import TransitionsModal from '../utils/robotPicker'

//import interface
import { RobotData } from "../constants/constants";

//Delete later
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import turnLeft from '../utils/turnLeft'
import turnRight from '../utils/turnRight'
import moveOnBoard from '../utils/moveOnBoard'


const InputForm: React.FC = () => {
  // const [input, setInput] = useState("");
  const [robotStart, setRobotStart] =useState(true)
  const [robotData, setRobotData] = useState<RobotData>({
    command: "",
    error: "",
    x: null,
    y: null,
    facing: "",
  });
  const [oldLocation, setOldLocation] = useState("");


  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   setOldLocation(String(robotData.x) + String(robotData.y));
  //   console.log(input)
  //   setRobotData(
  //     initInputChecker(splitInputString(input, robotData), oldLocation)
  //   );
  //   setInput("");
  // };

  /**
   * Function: HandleDefault
   * Goal:    this will move to be the default login for the place on board and movement.  Once robot is placed on board the button will be disabled to not reset robot
   */
   
    const handleDefault = () => {

    if(robotStart){
    // TransitionsModal()
    let dis = document.getElementById("showInfo")!;
    dis.style.display="flex"
    let diss = document.getElementById("displaySpacer")!
    diss.classList.toggle('hidden')
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
          let highlight = document.getElementById("left")!;
          highlight.classList.add('highlight');
          setTimeout(function(){
              highlight.classList.remove('highlight');
          }, 75)
        }
        runthis()
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
           let highlight = document.getElementById("top")!;
          highlight.classList.add('highlight');
          setTimeout(function(){
              highlight.classList.remove('highlight');
          }, 75)
        }
        runthis()
      }
       if(event.keyCode===39){
        setOldLocation(String(robotData.x) + String(robotData.y));
        const runthis = () => {
          let newFacing = turnRight(robotData)
          setRobotData({
            ...robotData,
            facing:newFacing.facing,
          })
           let highlight = document.getElementById("right")!;
          highlight.classList.add('highlight');
          setTimeout(function(){
              highlight.classList.remove('highlight');
          }, 75)
        }
        runthis()
      }
    })
    setRobotStart(false)

    }
  };

  return (
    <div className="displays">
      <div id="displaySpacer">
        <br></br>
        <br />
        <div></div>
        <h3>Place Robot on the Board</h3>
        <div className="arrow bounce"></div>
        <Button
          variant="contained"
          color="primary"
          className="quickStart"
          onClick={handleDefault}
        >
          Start
        </Button>
        
      </div>
      
      <div id="showInfo">
        <KeyBoard />
        <div id="board"></div>
        <Board robotData={robotData} oldLocation={oldLocation} />
      </div>
    
    </div>
  );
};

export default InputForm;