'use strict'

import 'babel-polyfill'

import React from 'react'
import {shallow} from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import AppComponent from '../../app/appComponent'
import * as Game from '../../app/app'

describe('AppComponent', () => {

  it('should present button with text "Start Game"', () => {
    const appComponent = shallow(<AppComponent />)

    expect('Start Game').to.equal(appComponent.find('button').text())
  })

})
