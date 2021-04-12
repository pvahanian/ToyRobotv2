/**
 * Function: renderBoard
 * Params:  Board html element 
 * Goal:    Render a board to the DOM based on tableDimensions 
 * Return:  N/A
 */

import { tableDimension } from "../constants/constants";

const rows = tableDimension.x;
const cols = tableDimension.y;

export default function renderBoard(board: any) {
  let boardCheck = document.getElementsByClassName("row");

  if (boardCheck.length === 0) {
    let rowCounter = 0;
    for (let i = 0; i < rows; ++i) {
      let row = document.createElement("div");
      row.className = "row";
      let squareCounter = 4;
      for (let j = 0; j < cols; ++j) {
        let square = document.createElement("div");
        square.className = "square";
        square.id = String(rowCounter) + String(squareCounter);
        row.appendChild(square);
        squareCounter--;
      }
      board?.appendChild(row);
      rowCounter++;
    }
  }
  
}
