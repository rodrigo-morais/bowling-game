import { createStore, applyMiddleware, compose } from '../node_modules/redux/dist/redux'
import { combineReducers } from '../node_modules/redux/dist/redux'
import createLogger from 'redux-logger'

import game from './header/reducers'
import board from './board/reducers'

const reducers = combineReducers({ game, board })

const middlewares = []
if (process.env.NODE_ENV === `development`) {
  const logger = createLogger()
  middlewares.push(logger)
}


export const store = compose(applyMiddleware(...middlewares))(createStore)(reducers)
