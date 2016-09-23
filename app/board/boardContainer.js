import { connect } from 'react-redux'
import board from './board'
import Board from './boardComponent' 

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActualFrame: board.getActualFrame, 
    getPointsFromFrameIndex: board.getPointsFromFrameIndex,
    getScore: board.getScore
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)

