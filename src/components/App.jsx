import { getContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/Contactlist';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

export function App() {
  const { isLoading, error } = useSelector(state => state.contacts);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getContacts());
  }, [dispath]);
  return (
    <>
      {isLoading && <Loader />}
      {!error ? (
        <>
          <ContactForm />
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
}
