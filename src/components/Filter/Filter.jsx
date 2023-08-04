import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { filterContacts } from 'redux/reduxContactsList/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const onChange = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};
