'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import * as board from '../../../app/board/board'
import { START_BOARD } from '../../../app/board/actions'

describe('Board', () => {
  it("should return the actual frame as 0", () => {
    const expected = { 'actualFrame': 0 }


    expect(board.getActualFrame()).to.equal(0)
  })

  it("should return actual frame as 1 when START_BOARD action is called", () => {
    const expected = { 'actualFrame': 0 }

    deepFreeze(board)

    board.startBoard()

    expect(board.getActualFrame()).to.equal(1)
  })
})
