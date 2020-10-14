// Import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



// Import root reducer
import rootReducer from './redux/reducers';
const middleware = [thunk];


const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))


);

export default store;
