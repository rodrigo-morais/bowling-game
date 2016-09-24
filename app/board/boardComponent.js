import React from 'react'

import BallComponent from './ball/ballComponent'

const Board = (props) => {

  const isActive = (frameIndex) => frameIndex === props.getActualFrame()

  const getFirstRoll = (frameIndex) => props.getPointsFromFrameIndex(frameIndex).length >= 1 ? props.getPointsFromFrameIndex(frameIndex)[0] : '-'

  const getSecondRoll = (frameIndex) => props.getPointsFromFrameIndex(frameIndex).length === 2 ? props.getPointsFromFrameIndex(frameIndex)[1] : '-'

  const getTotalPoints = (frameIndex) =>  props.getPointsFromFrameIndex(frameIndex).length === 2
                                          ? getFirstRoll(frameIndex) + getSecondRoll(frameIndex)
                                          : '-'

  const isStrike = (frameIndex) => getFirstRoll(frameIndex) === 10

  const isSpare = (frameIndex) => isStrike(frameIndex) ? false : getTotalPoints(frameIndex) === 10

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
              <td className={isStrike(index) ? "strike": ''}>{getFirstRoll(index)}</td>
              <td>{getSecondRoll(index)}</td>
            </tr>
            <tr>
              <td colSpan="2" className={isSpare(index) ? "spare": ''}>{getTotalPoints(index)}</td>
            </tr>
          </tbody>
        </table>
  }

  return (
    <div className='board-container'>
      <h2>Score: </h2><h3>{props.getScore()}</h3>
      <div className='frames'>
        {getTables()}
      </div>
    </div>
  )
}

export default Board
