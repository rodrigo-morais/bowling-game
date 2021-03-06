'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { START_BOARD, PLAY_BALL, SCORE } from '../../../app/board/actions'
import reducer from '../../../app/board/reducers'

const initialFrame = {
  'points': []
, 'pins': 10
}

const initialState = {
  'actualFrame': 0
, 'frames': new Array(10).fill(initialFrame)
, 'score': 0
}

describe('Board reducers', () => {
  it('should return actual frame as 1 when call START_BOARD action', () => {
    const expected =  { ...initialState
                      , 'actualFrame': 1
                      }

    expect(reducer(initialState, { 'type': START_BOARD }))
      .to.deep.equal(expected)
  })

  it('should return points with a value when call PLAY_BALL action', () => {
    const expected = [1] 
    const state = { ...initialState
                  , 'actualFrame': 1
                  }
    const play = reducer(state, { 'type': PLAY_BALL, 'payload': 1 }).frames[0]

    expect(play.points).to.deep.equal(expected)
    expect(play.pins).to.equal(9)
  })

  it('should add points to score when score action is called', () => {
    const expected =  { ...initialState
                      , score: 10
                      }

    expect(reducer(initialState, { 'type': SCORE, 'payload': 10 })).to.deep.equal(expected)
  })
})
