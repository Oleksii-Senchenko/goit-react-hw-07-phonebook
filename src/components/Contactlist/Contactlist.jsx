import css from './ContactList.module.css';
import { useSelector, } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { getStateFilter } from 'redux/filterSlice';
import { getContactsState } from 'redux/contactsSlice';

function Contactlist() {
  const contacts = useSelector(getContactsState);
  const filter = useSelector(getStateFilter);
  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact List</h2>
      <ul className={css.list}>
        {filteredContacts.length !== 0 ? (
          filteredContacts.map(contact => (
            <ContactListItem
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))
        ) : (
          <p>List is empty</p>
        )}
      </ul>
    </div>
  );
}

export default Contactlist;
