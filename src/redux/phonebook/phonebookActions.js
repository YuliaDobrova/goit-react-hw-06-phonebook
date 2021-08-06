// Создай действия (actions) сохранения и удаления контакта, а также обновления фильтра.
import { createAction } from "@reduxjs/toolkit";

export const ADD_CONTACT = "phonebook/addContact";
export const DELETE_CONTACT = "phonebook/deleteContact";
export const SET_FILTER = "phonebook/setFilter";

const addContact = createAction(ADD_CONTACT);
const deleteContact = createAction(DELETE_CONTACT);
const setFilter = createAction(SET_FILTER);

export { addContact, deleteContact, setFilter };

// ==================================================================
// REDUX
// export const ADD_CONTACT = "phonebook/addContact";
// export const DELETE_CONTACT = "phonebook/deleteContact";
// export const SET_FILTER = "phonebook/setFilter";

// const addContact = (newContact) => ({
//   type: ADD_CONTACT,
//   payload: newContact,
// });
// const deleteContact = (id) => ({ type: DELETE_CONTACT, payload: id });

// const setFilter = (value) => ({ type: SET_FILTER, payload: value });
// export { addContact, deleteContact, setFilter };
