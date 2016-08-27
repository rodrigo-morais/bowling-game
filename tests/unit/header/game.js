'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import * as game from '../../../app/header/game'
import { START_GAME, STOP_GAME } from '../../../app/header/actions'

describe('App', () => {
  it("should return that game is running after change state the game", () => {
    let expected = { 'running': true }

    deepFreeze(game)

    game.changeState({ 'type': START_GAME })

    expect(game.isRunning()).to.be.true
  })

  it("should return that game is not running after change state the game", () => {
    let expected = { 'running': false }

    deepFreeze(game)

    game.changeState({ 'type': STOP_GAME })

    expect(game.isRunning()).to.be.false
  })
})
