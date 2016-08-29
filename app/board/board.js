import { store } from '../app'
import { START_BOARD, PLAY_BALL, SCORE } from './actions'
import reducers from './reducers'

export const getActualFrame = () => store.getState().board.actualFrame

export const getPointsFromFrameIndex = (frameIndex) => store.getState().board.frames[frameIndex].points

export const startBoard = () => store.dispatch({ 'type': START_BOARD })

export const playBall = () => {
  const board = store.getState().board
  const pinsNumber = Math.floor(Math.random() * (board.frames[board.actualFrame - 1].pins + 1))

  store.dispatch({ 'type': PLAY_BALL, 'payload': pinsNumber })
  scorePoints(pinsNumber)
}

export const getScore = () => store.getState().board.score

export const scorePoints = (point) => store.dispatch({ 'type': SCORE, 'payload': point })
