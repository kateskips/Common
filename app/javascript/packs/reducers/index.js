import { combineReducers } from 'redux';
import { asks, asksHasErrored, asksIsLoading } from './questions';
export default combineReducers({
    asks,
    asksHasErrored,
    asksIsLoading
});