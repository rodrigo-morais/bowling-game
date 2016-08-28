'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { START_BOARD, PLAY_BALL } from '../../../app/board/actions'
import reducer from '../../../app/board/reducers'

const initialFrame = {
  'points': []
}

const initialState = {
  'actualFrame': 0,
  'frames': new Array(10).fill(initialFrame)
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
    const points = reducer(state, { 'type': PLAY_BALL, 'payload': 1 }).frames[0].points

    expect(points).to.deep.equal(expected)
  })
})
