import React from 'react'

import HeaderComponent from './header/headerComponent'
import BoardComponent from './board/boardComponent'

const App = () => {
  return (
    <div className='app-container'>
      <HeaderComponent />
      <BoardComponent />
    </div>
  )
}

export default App
