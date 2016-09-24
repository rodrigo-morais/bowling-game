import React from 'react'

import * as game from '../header/game'
import * as board from './board'
import BoardComponent from './boardComponent'

const BoardContainer = () => {
  const buildBoard = () => (
      <BoardComponent
        getActualFrame={board.getActualFrame}
        getPointsFromFrameIndex={board.getPointsFromFrameIndex}
        getScore={board.getScore}
      />
  )


  return game.isRunning() ? buildBoard() : <div />
}

export default BoardContainer
