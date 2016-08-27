import { START_BOARD } from './actions'

const initialState = {
  'actualFrame': 0
}

const board = (state = initialState, action) => {
  switch(action.type) {
    case START_BOARD:
      return  { ...state
              , 'actualFrame': 1
              }
    default:
      return state
  }
}

export default board
