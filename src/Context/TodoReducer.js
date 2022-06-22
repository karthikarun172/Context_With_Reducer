import { TODO_ACTIONS } from "./TodoActions";

export const initialState = [];

const TodoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      const Added_Data = [...state, action.payload];
      return Added_Data;

    case TODO_ACTIONS.REMOVE_TODO:
      const Removered_Datas = state.filter((d) => d._id != action.payload);
      return Removered_Datas;

    default:
      return state;
  }
};

export default TodoReducer;
