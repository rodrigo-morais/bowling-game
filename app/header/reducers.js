import { combineReducers } from '../../node_modules/redux/dist/redux'

import { START_GAME, STOP_GAME } from './actions'


const initialState = {
  'running': false
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case START_GAME:
      return  {...state
              , 'running': true
              }
    case STOP_GAME:
      return  {...state
              , 'running': false
              }
    default:
      return state
  }
}

const reducers = combineReducers({ game })

export default reducers
