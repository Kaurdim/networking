import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redusers/rootReduser';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
}

export const store = configureStore({});