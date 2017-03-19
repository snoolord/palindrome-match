import { combineReducers } from 'redux';
import TextReducer from '../components/text/text-reducer'

const RootReducer = combineReducers({
    body: TextReducer
});

export default RootReducer;
