import { createContext, useContext, useReducer } from "react";
import { TODO_ACTIONS } from "./TodoActions";
import TodoReducer, { initialState } from "./TodoReducer";

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodos = (product) => {
    dispatch({
      type: TODO_ACTIONS.ADD_TODO,
      payload: product,
    });
  };

  const removeTodos = (_id) => {
    dispatch({
      type: TODO_ACTIONS.REMOVE_TODO,
      payload: _id,
    });
  };

  const value = {
    todos: state,
    addTodos,
    removeTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context = useContext(TodoContext);

  return context;
};

export default useTodo;
