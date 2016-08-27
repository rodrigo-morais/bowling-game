import reducers from './reducers'
import { store } from '../app'

export const isRunning = () => store.getState().game.running

export let changeState = ({type, payload}) => store.dispatch({ type })
