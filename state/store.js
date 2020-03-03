import { createStore, applyMiddleware, combineReducers } from "redux";
import {default as reducers} from "./ducks/ToDo/";
//import * as reducers from "./ducks"; // import all reducers from ducks/index.js

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  return createStore(
    rootReducer,
    initialState
  );
}