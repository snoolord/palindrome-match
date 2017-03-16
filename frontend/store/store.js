import { createStore } from 'redux';
import RootReducer from '../reducers/root-reducer';
import masterMiddleware from '../middleware/master-middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    masterMiddleware
  )
);

export default configureStore;
