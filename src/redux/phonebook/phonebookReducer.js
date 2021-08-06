// Создай редюсеры контактов и фильтра.
// =============================================

import { combineReducers } from "redux";
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./phonebookActions";

// state={items:[{name:'', number:''},{name:'', number:''}], filter:''}

const itemsReducer = (state = [], { type, payload }) => {
  console.log(payload);
  console.log(state);
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

export default contactsReducer;
