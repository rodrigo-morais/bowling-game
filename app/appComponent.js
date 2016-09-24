import React from 'react'

import HeaderComponent from './header/headerComponent'
import BoardComponent from './board/boardComponent'
import BoardContainer from './board/boardContainer'

const App = () => {
  return (
    <div className='app-container'>
      <HeaderComponent />
      <BoardContainer />
    </div>
  )
}

export default App
