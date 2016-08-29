import { START_BOARD, PLAY_BALL, SCORE } from './actions'

const initialFrame = {
  'points': []
, 'pins': 10
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

const hasStrike = (state, frameIndex) =>  frameIndex === 1
                                          ? false
                                          : state
                                              .frames
                                              .slice( (frameIndex >= 2 ? frameIndex - 2 : 0)
                                                    , frameIndex - 1
                                              )[0].points[0] === 10

const hasSpare = (state, frameIndex) => frameIndex > 1 && frameIndex <= 10
                                        && state.frames.slice(state.actualFrame - 1, state.actualFrame)[0].points.length === 1
                                        && state.frames.slice(state.actualFrame - 2, state.actualFrame - 1)[0].points.reduce((previous, current) => previous + current) === 10
                                        && state.frames.slice(state.actualFrame - 2, state.actualFrame - 1)[0].points[0] < 10
                                        ? true
                                        : false

const buildPoints = (state, payload) => [ ...state.frames.slice(state.actualFrame - 1, state.actualFrame)[0].points
                                        , payload
                                        ]

const buildFrame = (state, payload) => ({ ...state.frames.slice(state.actualFrame - 1, state.actualFrame)
                                        , 'points': buildPoints(state, payload)
                                        , 'pins': state.frames.slice(state.actualFrame - 1, state.actualFrame)[0].pins - payload
                                        }
                                       )

const buildFrames = (state, payload) => [ ...state.frames.slice(0, state.actualFrame - 1)
                                        , buildFrame(state, payload)
                                        , ...state.frames.slice(state.actualFrame)
                                        ]

const updateScore = (state, payload) => state.score + (hasStrike(state, state.actualFrame - 1)
                                                      ? payload + 20
                                                      : hasSpare(state, state.actualFrame)
                                                        ? payload + 10
                                                        : payload
                                                      )

const board = (state = initialState, action) => {
  switch(action.type) {
    case START_BOARD:
      return  { ...state
              , 'actualFrame': 1
              , 'frames': new Array(10).fill(initialFrame)
              , 'score': 0
              }
    case PLAY_BALL:
      return  { ...state
              , 'actualFrame': getActualFrame(state)
              , 'frames': buildFrames(state, action.payload)
              }
    case SCORE:
      return  { ...state
              , 'score': updateScore(state, action.payload)
              }
    default:
      return state
  }
}

export default board
