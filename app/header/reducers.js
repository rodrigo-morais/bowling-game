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

export default game
