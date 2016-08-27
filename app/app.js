import reducers from './reducers'
import { createStore } from '../node_modules/redux/dist/redux'

export const store = createStore(reducers)

export const isRunning = () => store.getState().game.running

export let changeState = ({type, payload}) => store.dispatch({ type })
