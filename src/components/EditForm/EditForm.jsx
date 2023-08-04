import { useContacts } from 'hooks/useContacts';
import { Button } from 'utils-style/Template.styled';
import PropTypes from 'prop-types';

export const EditForm = ({ toggleModal, id, name, number }) => {
  const { editContact } = useContacts();
  const onSubmit = e => {
    e.preventDefault();
    const editedContact = {
      name: e.target.name.value,
      number: e.target.phone.value,
    };

    editContact(id, editedContact);
    toggleModal();
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ width: 400, height: 400, backgroundColor: 'white' }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          defaultValue={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="tel"
          name="phone"
          defaultValue={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <Button type="submit">Save</Button>
      <Button type="button" onClick={toggleModal}>
        Close
      </Button>
    </form>
  );
};

EditForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
