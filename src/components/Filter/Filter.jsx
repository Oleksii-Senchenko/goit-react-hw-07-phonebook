import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterList } from 'redux/filterSlice';
function Filter() {
  const dispatch = useDispatch();

  const handleСhange = e => {
    const { value } = e.target;
    dispatch(filterList(value));
  };

  return (
    <form className={css.form}>
      <label htmlFor="" className={css.label}>
        find contacts by name
        <input
          onChange={handleСhange}
          type="text"
          name="query"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
    </form>
  );
}

export default Filter;
