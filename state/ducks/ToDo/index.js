
import { combineReducers } from "redux";

// Types
const ADD_TODO = "ADD_TODO";
const Types = {
  ADD_TODO,
};

// Actions
let nextTodoId = 0;

const addTodo = text => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text
});
const Actions = {
  addTodo,
};

// Reducers
const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    default:
      return state;
  }
};
const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, todo(undefined, action)];
    case types.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};
const todosReducer = combineReducers({
  todos,
});

export default todosReducer;