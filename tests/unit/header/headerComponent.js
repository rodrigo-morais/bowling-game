'use strict'

import 'babel-polyfill'

import React from 'react'
import {shallow} from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import HeaderComponent from '../../../app/header/headerComponent'
import * as Game from '../../../app/header/game'

describe('AppComponent', () => {

  it('should present button with text "Start Game"', () => {
    const appComponent = shallow(<HeaderComponent />)

    expect('Start Game').to.equal(appComponent.find('button').text())
  })

})
