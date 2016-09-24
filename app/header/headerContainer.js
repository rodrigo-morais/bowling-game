import React from 'react'

import * as game from './game'
import HeaderComponent from './headerComponent'

const HeaderContainer = () => {
  return (
    <HeaderComponent
      isRunning={game.isRunning}
      changeState={game.changeState}
    />
  )
}

export default HeaderContainer
