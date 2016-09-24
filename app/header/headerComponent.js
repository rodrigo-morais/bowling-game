import React from 'react'

import { START_GAME, STOP_GAME } from './actions'

const Header = (props) => {

  const getAction  = () => props.isRunning() ? STOP_GAME : START_GAME

  const onClick = () => props.changeState({ 'type': getAction() })
   
  const getButtonTextState = () => props.isRunning() ? 'Stop Game' : 'Start Game'

  const buildButtonState = () => <button onClick={onClick}>{getButtonTextState()}</button>

  return (
    <div className='header-container'>
      <header>
        <h1>Bowling</h1>
        {buildButtonState()}
      </header>
    </div>
  )
}

export default Header
