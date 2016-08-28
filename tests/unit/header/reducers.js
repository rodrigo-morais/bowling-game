'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { START_GAME, STOP_GAME } from '../../../app/header/actions'
import reducer from '../../../app/header/reducers'

const initialState = { 'running': false }

describe('Game reducers', () => {
  it('should return game running when call start game action', () => {
    const expected =  { ...initialState
                      , 'running': true
                      }

    expect(reducer(initialState, { 'type': START_GAME }))
      .to.deep.equal(expected)
  })

  it('should return game not running when call stop game action', () => {
    const expected =  { ...initialState
                      , 'running': false
                      }
    const state =  { ...initialState
                      , 'running': true
                      }

    expect(reducer(state, { 'type': STOP_GAME }))
      .to.deep.equal(expected)
  })
})
