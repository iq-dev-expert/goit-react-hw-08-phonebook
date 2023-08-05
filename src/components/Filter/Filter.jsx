import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { filterContacts } from 'redux/reduxContactsList/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const onChange = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <label className="mb-5 inline-block">
      Find contacts by name:
      <br />
      <input
        type="text"
        value={filter}
        placeholder="Name"
        onChange={onChange}
        className="rounded border border-black hover:border-violet-500 focus:outline-violet-500"
      />
    </label>
  );
};
