// Создай хранилище и добавь инструменты разработчика
// =============================================

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./phonebook/phonebookReducer";

const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store;

// =============================================
// REDUX
// import { createStore } from "redux";
// // import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./phonebook/phonebookReducer";

// const store = createStore(contactsReducer, composeWithDevTools());

// export default store;
