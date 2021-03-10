import { tableDimension } from "../constants/constants";

const rows = tableDimension.x;
const cols = tableDimension.y;

// Look here for how to handle board: https://github.com/willwearing/toy-robot/compare/main...Fizzadar:main

export default function renderBoard(board: any) {
  let boardCheck = document.getElementsByClassName("row");

  if (boardCheck.length === 0) {
    for (let i = 0; i < rows; ++i) {
      console.log(board, document.getElementsByClassName("row"));
      let row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < cols; ++j) {
        let square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
      }
      board?.appendChild(row);
    }
  }
}
