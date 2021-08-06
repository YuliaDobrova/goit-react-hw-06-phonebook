import React from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";

const App = () => {
  return (
    <>
      <h1 className="appHeading">Phonebook</h1>
      <ContactForm />
      <h2 className="appHeading">Contacts</h2>
      <ContactList />
    </>
  );
};

export default App;

// ===============================================
// <>
// <h1 className="appHeading">Phonebook</h1>
// <ContactForm addContact={this.addContact} />
// <h2 className="appHeading">Contacts</h2>
// <Filter value={this.state.filter} onFilter={this.onFilter} />
// <ContactList
//   contacts={this.filteredContacts()}
//   addContact={this.addContact}
//   removeContact={this.removeContact}
// />
// </>
