import React from 'react'

import { START_GAME, STOP_GAME } from './actions'
import * as game from './app'


const App = () => {

  const getAction  = () => game.isRunning() ? STOP_GAME : START_GAME

  const onClick = () => game.changeState({ 'type': getAction() })
   
  const getButtonTextState = () => game.isRunning() ? 'Stop Game' : 'Start Game'

  const buildButtonState = () => <button onClick={onClick}>{getButtonTextState()}</button>

  return (
    <div className='app-container'>
      <header>
        <h1>Bowling</h1>
        {buildButtonState()}
      </header>
    </div>
  )
}

export default App
