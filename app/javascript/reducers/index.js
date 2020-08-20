import randomReducer from './random'
import everythingReducer from './everything'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    random: randomReducer,
    everything: everythingReducer
})

export default allReducers