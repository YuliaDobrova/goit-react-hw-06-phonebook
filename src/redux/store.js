// Создай хранилище и добавь инструменты разработчика
// =============================================

import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./phonebook/phonebookReducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = contactsReducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
// eslint ругается

// =============================================
// REDUX
// import { createStore } from "redux";
// // import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./phonebook/phonebookReducer";

// const store = createStore(contactsReducer, composeWithDevTools());

// export default store;
