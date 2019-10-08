import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registrating_reducer from '../reducers/combineReducer'


const store = createStore(
    registrating_reducer,
    {},
    applyMiddleware(thunk),
)
export default store;