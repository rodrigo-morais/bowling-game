import React from 'react'

import BallComponent from './ball/ballComponent'

import * as game from '../header/game'
import * as board from './board'

const Board = () => {

  const isActive = (frameIndex) => frameIndex === board.getActualFrame()

  const getFirstRoll = (frameIndex) => board.getPointsFromFrameIndex(frameIndex).length >= 1 ? board.getPointsFromFrameIndex(frameIndex)[0] : '-'

  const getSecondRoll = (frameIndex) => board.getPointsFromFrameIndex(frameIndex).length === 2 ? board.getPointsFromFrameIndex(frameIndex)[1] : '-'

  const getTables = () => new Array(10).fill().map(getTable)

  const getTable = (value, index) => {
        return <table key={"board-" + index} className={isActive(index + 1) ? "active": ''}>
          <thead>
            <tr className="button-ball">
              <th colSpan="2">
                <BallComponent frameNumber={index + 1} />
              </th>
            </tr>
            <tr>
              <th colSpan="2">{index + 1}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{getFirstRoll(index)}</td>
              <td>{getSecondRoll(index)}</td>
            </tr>
          </tbody>
        </table>
  }

  const buildBoard = () => (
    <div className='board-container'>
      <h2>Score: </h2><h3>{board.getScore()}</h3>
      <div className='frames'>
        {getTables()}
      </div>
    </div>
  )


  return game.isRunning() ? buildBoard() : <div />
}

export default Board
