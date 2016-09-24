import React from 'react'

import HeaderContainer from './header/headerContainer'
import BoardContainer from './board/boardContainer'

const App = () => {
  return (
    <div className='app-container'>
      <HeaderContainer />
      <BoardContainer />
    </div>
  )
}

export default App
