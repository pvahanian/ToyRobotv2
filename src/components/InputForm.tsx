/**
 * Function: InputForm
 * Param: No params required
 * Goal: Take input and pass it through to checker functions
 */

import React, { useState, FormEvent } from "react"
import Button from "@material-ui/core/Button"
import Board from "./Board"
import RobotPicker from "./RobotPicker"

//import utils
import splitInputString from "../utils/splitInputString"
import initInputChecker from "../utils/initInputChecker"

//import interface
import { RobotData } from "../constants/constants"

//Delete later
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import turnLeft from "../utils/turnLeft"
import turnRight from "../utils/turnRight"
import moveOnBoard from "../utils/moveOnBoard"

const InputForm: React.FC = () => {
  // const [input, setInput] = useState("");
  const [robotStart, setRobotStart] = useState(true)
  const [robotData, setRobotData] = useState<RobotData>({
    command: "",
    error: "",
    x: null,
    y: null,
    facing: "",
    image:
      "https://media.tenor.com/images/19a2013ea8329376f3ee6285dad9d55a/tenor.gif",
  })
  const [oldLocation, setOldLocation] = useState("")

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
    if (robotStart) {
      let startDisplay = document.getElementById("displaySpacer")!
      let boardDisplay = document.getElementById("showInfo")!
      startDisplay.style.opacity = "0"
      setTimeout(() => {
        startDisplay.classList.toggle("hidden")
        boardDisplay.style.display = "flex"
      }, 200)
      setTimeout(() => {
        boardDisplay.style.opacity = "1"
      }, 450)

      setOldLocation(String(robotData.x) + String(robotData.y))
      setRobotData(
        initInputChecker(
          splitInputString("Place, 0,0, north", robotData),
          oldLocation
        )
      )

      document.addEventListener("keydown", function (event) {
        let arrowKeys: HTMLElement = document.getElementById(
          "arrowKeysInstructions"
        )!
        arrowKeys.setAttribute("style", "display:none")
        if (event.keyCode === 37) {
          setOldLocation(String(robotData.x) + String(robotData.y))
          const runthis = () => {
            let newFacing = turnLeft(robotData)
            setRobotData({
              ...robotData,
              facing: newFacing.facing,
            })
            let highlight = document.getElementById("left")!
            highlight.classList.add("highlight")
            setTimeout(function () {
              highlight.classList.remove("highlight")
            }, 75)
          }
          runthis()
        }
        if (event.keyCode === 38) {
          setOldLocation(String(robotData.x) + String(robotData.y))
          const runthis = () => {
            let newSpot = moveOnBoard(robotData)
            setRobotData({
              ...robotData,
              x: newSpot.x,
              y: newSpot.y,
            })
            let highlight = document.getElementById("top")!
            highlight.classList.add("highlight")
            setTimeout(function () {
              highlight.classList.remove("highlight")
            }, 75)
          }
          runthis()
        }
        if (event.keyCode === 39) {
          setOldLocation(String(robotData.x) + String(robotData.y))
          const runthis = () => {
            let newFacing = turnRight(robotData)
            setRobotData({
              ...robotData,
              facing: newFacing.facing,
            })
            let highlight = document.getElementById("right")!
            highlight.classList.add("highlight")
            setTimeout(function () {
              highlight.classList.remove("highlight")
            }, 75)
          }
          runthis()
        }
      })
      setRobotStart(false)
    }
  }

  return (
    <div className="displays">
      <div id="displaySpacer">
        <RobotPicker robotData={robotData} />
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
        <div id="board"></div>
        <Board robotData={robotData} oldLocation={oldLocation} />
      </div>
    </div>
  )
}

export default InputForm
