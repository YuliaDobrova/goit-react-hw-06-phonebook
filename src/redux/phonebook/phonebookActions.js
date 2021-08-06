// Создай действия (actions) сохранения и удаления контакта, а также обновления фильтра.

export const ADD_CONTACT = "phonebook/addContact";
export const DELETE_CONTACT = "phonebook/deleteContact";
export const SET_FILTER = "phonebook/setFilter";

const addContact = (newContact) => ({
  type: ADD_CONTACT,
  payload: newContact,
});
const deleteContact = (id) => ({ type: DELETE_CONTACT, payload: id });

const setFilter = (value) => ({ type: SET_FILTER, payload: value });
export { addContact, deleteContact, setFilter };

// const action = { type: "addContact", payload: { name: "", id: "1" } };
// const action = { type: "deleteContact", payload: "1" };
