import React, { useState, FormEvent } from "react";
import Console from "./Console";
import Board from "./Board";

//import utils
import splitInputString from "../utils/splitInputString";

const InputForm: React.FC = () => {
  const [input, setInput] = useState("");
  const [inputArrayOfStrings, setInputArrayOfStrings] = useState([]);

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
      <div>
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
