import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContactsState } from 'redux/contactsSlice';
import css from './ContactForm.module.css';
import { addContact } from 'redux/operations';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      return;
    }
    const finedNumber = contacts.find(
      contact =>
        contact.number && contact.number.toLowerCase() === number.toLowerCase()
    );

    if (finedNumber) {
      alert(
        `In your phoneBook already have this number his name is ${finedNumber.name}`
      );
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleInput}
        required
        className={css.inputField}
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone Number"
        value={number}
        onChange={handleInput}
        required
        className={css.inputField}
      />
      <button type="submit" className={css.submitButton}>
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
