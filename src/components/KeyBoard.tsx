/**
 * Function: keyBoard
 * Goal:
 * Return:
 */
import arrow from "../images/arrow.png"

function KeyBoard() {
  return (
    <div>
      <div id="arrowHolder">
        <img id="left" className="arrows" src={arrow} />
        <img id="top" className="arrows" src={arrow} />
        <img id="right" className="arrows" src={arrow} />
      </div>
    </div>
  )
}

export default KeyBoard
