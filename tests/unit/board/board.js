'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import sinon from 'sinon'

import { store } from '../../../app/app'
import * as board from '../../../app/board/board'
import { START_BOARD, PLAY_BALL } from '../../../app/board/actions'

describe('Board', () => {
  it('should return the actual frame as 0', () => {
    expect(board.getActualFrame()).to.equal(0)
  })

  it('should return actual frame as 1 when START_BOARD action is called', () => {
    deepFreeze(board)

    board.startBoard()

    expect(board.getActualFrame()).to.equal(1)
  })

  it('should return an array when get points from a frame', () => {
    const expected = []

    deepFreeze(board)

    expect(expected).to.deep.equal(board.getPointsFromFrameIndex(0))
  })

  it('should call dispatch from store when play a ball', () => {
    const storeSpy = sinon.spy(store, 'dispatch')

    deepFreeze(board)

    board.playBall()

    expect(storeSpy.called).to.be.true

    store.dispatch.restore()
  })

  it('should first frame has two points and the actual frame change to second after call play ball twice.', () => {
    deepFreeze(board)

    board.playBall()
    board.playBall()

    expect(board.getActualFrame()).to.equal(2)
    expect(board.getPointsFromFrameIndex(0).length).to.equal(2)
  })

  it('should get a score with 0 points', () => {
    deepFreeze(board)

    expect(board.getScore()).to.equal(0)
  })

  it('should get a score with 10 points when call score points passing 10', () => {
    board.startBoard()

    deepFreeze(board)

    board.scorePoints(10)

    expect(board.getScore()).to.equal(10)
  })

  it('should get a score with 15 points when call score points passing 10 and after call passing 5', () => {
    board.startBoard()

    deepFreeze(board)

    board.scorePoints(10)
    board.scorePoints(5)

    expect(board.getScore()).to.equal(15)
  })
})
