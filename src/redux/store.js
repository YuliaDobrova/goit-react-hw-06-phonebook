// Создай хранилище и добавь инструменты разработчика
// =============================================

import { createStore } from "redux";
// import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./phonebook/phonebookReducer";

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
