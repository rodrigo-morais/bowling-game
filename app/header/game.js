import reducers from './reducers'
import { store } from '../app'
import * as board from '../board/board'

export const isRunning = () => store.getState().game.running

export const changeState = ({type, payload}) => {
  store.dispatch({ type })
  board.startBoard()
}
