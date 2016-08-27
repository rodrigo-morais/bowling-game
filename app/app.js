import gameReducers from './header/reducers'
import { createStore } from '../node_modules/redux/dist/redux'

export const store = createStore(gameReducers)
