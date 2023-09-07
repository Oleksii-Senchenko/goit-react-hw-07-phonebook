import React from 'react';
import css from '../Contactlist/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';

function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li key={id} className={css.item}>
      <p className={css.name}>
        {name}:{number}
      </p>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
