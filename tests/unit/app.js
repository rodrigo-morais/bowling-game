'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import * as appTodo from '../../app/app'
import { START_GAME, STOP_GAME } from '../../app/actions'

describe('App', () => {
  it("should return that game is not running when start the app", () => {
    let expected = { 'running': false }

    deepFreeze(appTodo)

    expect(expected).to.deep.equal(appTodo.store.getState().game)
  })

  it("should return that game is running after change state the game", () => {
    let expected = { 'running': true }

    deepFreeze(appTodo)

    appTodo.changeState({ 'type': START_GAME })

    expect(expected).to.deep.equal(appTodo.store.getState().game)
    expect(appTodo.isRunning()).to.be.true
  })

  it("should return that game is not running after change state the game", () => {
    let expected = { 'running': false }

    deepFreeze(appTodo)

    appTodo.changeState({ 'type': STOP_GAME })

    expect(expected).to.deep.equal(appTodo.store.getState().game)
    expect(appTodo.isRunning()).to.be.false
  })
})
