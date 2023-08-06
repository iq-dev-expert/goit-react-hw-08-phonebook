import { useContacts } from 'hooks/useContacts';
import PropTypes from 'prop-types';

export const EditForm = ({ closeModal, id, name, number }) => {
  const { editContact } = useContacts();
  const onSubmit = e => {
    e.preventDefault();
    const editedContact = {
      name: e.target.name.value,
      number: e.target.phone.value,
    };

    editContact(id, editedContact);
    closeModal();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col rounded bg-white p-5">
      <label className="label-space-between">
        Name:
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="input-primary"
        />
      </label>
      <label className="label-space-between">
        Number:
        <input
          type="tel"
          name="phone"
          defaultValue={number}
          placeholder="Phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="input-primary"
        />
      </label>
      <div className="ml-auto w-fit">
        <button type="submit" className="btn-secondary mr-5">
          Save
        </button>
        <button type="button" onClick={closeModal} className="btn-secondary">
          Close
        </button>
      </div>
    </form>
  );
};

EditForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
