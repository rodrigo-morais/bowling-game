import { createStore } from '../node_modules/redux/dist/redux'
import { combineReducers } from '../node_modules/redux/dist/redux'

import game from './header/reducers'
import board from './board/reducers'

const reducers = combineReducers({ game, board })

export const store = createStore(reducers)
