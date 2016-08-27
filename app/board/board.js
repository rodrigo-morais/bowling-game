import { store } from '../app'
import { START_BOARD } from './actions'
import reducers from './reducers'

export const getActualFrame = () => store.getState().board.actualFrame

export const startBoard = () => store.dispatch({ 'type': START_BOARD })
