import reducers from './reducers'
import { createStore } from '../node_modules/redux/dist/redux'

export const store = createStore(reducers)
