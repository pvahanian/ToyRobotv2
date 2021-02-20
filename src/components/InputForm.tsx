import React, { useState, FormEvent } from "react";
import Console from "./Console";
import Board from "./Board";

//import utils
import splitInputString from "../utils/splitInputString";
import reportLocation from "../utils/reportLocation";
import initInputChecker from "../utils/initInputChecker";
import isValidInput from "../utils/isValidInput";

//import constants
import { validCommands } from "../constants/commands";
import { placeCommand } from "../constants/commands";

const InputForm: React.FC = () => {
  const [input, setInput] = useState("");
  const [inputArrayOfStrings, setInputArrayOfStrings] = useState([]);
  const [coordinates, setCoordinates] = useState(["null"]);

  const validPath = () => {
    // Is the robot on the board?
    if (reportLocation(coordinates)) {
      // if true - invoke multi path switch
      setCoordinates(initInputChecker(inputArrayOfStrings, validCommands));
    } else {
      // if false - invoke PLACE only logic
      setCoordinates(initInputChecker(inputArrayOfStrings, placeCommand));
    }
    setInput("");
  };

  /**
   * Function: handleSubmit
   * Goal:    onClick, set InputArrayOfStrings state and setInput back to ""
   */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInputArrayOfStrings(splitInputString(input));
    setInput("");
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
        <Console inputArrayOfStrings={inputArrayOfStrings} />
      </div>
      <Board />
    </div>
  );
};

export default InputForm;
