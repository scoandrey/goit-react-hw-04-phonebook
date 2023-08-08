import React, { useState } from 'react';
import './Form.css';
const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameChange = e => {
    setName(e.target.value);
  };

  const numberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="formLabel">
        <span className="formName">Name</span>
        <input
          className="input"
          value={name}
          onChange={nameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="formLabel">
        <span>Number</span>
        <input
          className="input"
          value={number}
          onChange={numberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className="submit">
        Add Contact
      </button>
    </form>
  );
};
export default Form;
