import { store } from '../app'
import { START_BOARD, PLAY_BALL } from './actions'
import reducers from './reducers'

export const getActualFrame = () => store.getState().board.actualFrame

export const startBoard = () => store.dispatch({ 'type': START_BOARD })

export const playBall = () => store.dispatch({ 'type': PLAY_BALL, 'payload': 1 })
