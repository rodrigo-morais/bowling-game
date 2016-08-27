import { START_BOARD, PLAY_BALL } from './actions'

const initialState = {
  'actualFrame': 0,
}

const board = (state = initialState, action) => {
  switch(action.type) {
    case START_BOARD:
      return  { ...state
              , 'actualFrame': 1
              }
    case PLAY_BALL:
      return  { ...state
              , 'actualFrame': state.actualFrame + 1
              }
    default:
      return state
  }
}

export default board
