import { START_BOARD, PLAY_BALL, SCORE } from './actions'

const initialFrame = {
  'points': []
}

const initialState = {
  'actualFrame': 0
, 'frames': new Array(10).fill(initialFrame)
, 'score': 0
}

const getActualFrame = (state) => state.frames
                                    .slice(state.actualFrame - 1, state.actualFrame)[0].points.length === 1
                                    ? state.actualFrame + 1
                                    : state.actualFrame

const buildPoints = (state, payload) =>  [ ...state.frames.slice(state.actualFrame - 1, state.actualFrame)[0].points
                                , payload
                                ]

const buildFrame = (state, payload) => ({ ...state.frames.slice(state.actualFrame - 1, state.actualFrame)
                              , 'points': buildPoints(state, payload)
                              })

const buildFrames = (state, payload) =>  [ ...state.frames.slice(0, state.actualFrame - 1)
                                , buildFrame(state, payload)
                                , ...state.frames.slice(state.actualFrame)
                                ]

const board = (state = initialState, action) => {
  switch(action.type) {
    case START_BOARD:
      return  { ...state
              , 'actualFrame': 1
              , 'score': 0
              }
    case PLAY_BALL:
      return  { ...state
              , 'actualFrame': getActualFrame(state)
              , 'frames': buildFrames(state, action.payload)
              }
    case SCORE:
      return  { ...state
              , 'score': state.score + action.payload
              }
    default:
      return state
  }
}

export default board
