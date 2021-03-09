import { tableDimension } from "../constants/constants";


const rows = tableDimension.x
const cols = tableDimension.y

export default function renderBoard(board:any) {
    if(board?.innerHTML.className==="row"){
        console.log("fuck off")
    }

    for (let i = 0; i < rows; ++i){
        let row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < cols; ++j){
            let square = document.createElement('div')
            square.className = 'square'
            square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
            row.appendChild(square)
        }
        board?.appendChild(row)
    }
    console.log(board)
} 


// const renderBoard1 = (useLabels) =>{
//     for (var i = 0; i < 8; ++i){
//       var row = document.createElement('DIV')
//       row.className = 'row'
//       row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'; 
//       for (var j = 0; j < 8; ++j){
//         var square = document.createElement('DIV')
//         square.className = 'square'
//         square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
//         row.appendChild(square)
//       }
//       board.appendChild(row)
//     }  