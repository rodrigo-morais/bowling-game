import React from 'react'

import * as board from '../board'

const Ball = ({ frameNumber }) => {

  const playBall = () => {
    if(frameNumber === board.getActualFrame()) {
      board.playBall()
    }
  }

  return (
    <div className="ball" onClick={playBall}>
      <div className="hole">
      </div>
      <div className="hole">
      </div>
      <div className="hole hole-last">
      </div>
    </div>
  )
}

export default Ball
