import React from 'react';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
const App = () => {
  const [contacts, setContacts] = React.useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = React.useState('');

  const removeContact = id => {
    setState(prevState => {
      const contacts = prevState.contacts.filter(cont => cont.id !== id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return { contacts };
    });
  };

  const addContact = contact => {
    const { contacts } = state;
    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setState(prevState => {
      const contacts = [...prevState.contacts];
      contacts.push({ ...contact, id: nanoid() });
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return { contacts };
    });
  };

  setFilter = name => {
    setState({ filter: name });
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <span>Find contacts by name</span>

      <Filter onChange={setFilter} />

      <Contacts contacts={filterContacts()} removeContact={removeContact} />
    </div>
  );
};
export default App;
