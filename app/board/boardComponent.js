import React from 'react'

import * as game from '../header/game'
import * as board from './board'

const Board = () => {

  const isActive = (frameIndex) => frameIndex === board.getActualFrame()

  const getTables = () => new Array(10).fill().map(getTable)

  const getTable = (value, index) => {
        return <table key={"board-" + index} className={isActive(index + 1) ? "active": ''}>
          <thead>
            <tr className="button-ball">
              <th colSpan="2">
                <div className="ball">
                  <div className="hole">
                  </div>
                  <div className="hole">
                  </div>
                  <div className="hole hole-last">
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan="2">{index + 1}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
  }

  const buildBoard = () => (
    <div className='board-container'>
      <h2>Score: </h2><h3>0</h3>
      <div className='frames'>
        {getTables()}
      </div>
    </div>
  )


  return game.isRunning() ? buildBoard() : <div />
}

export default Board
