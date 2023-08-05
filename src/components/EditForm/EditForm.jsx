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
      <label className="mb-5 flex justify-between">
        Name:
        <input
          type="text"
          name="name"
          defaultValue={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="ml-5 w-3/4 rounded	 border border-black hover:border-violet-500 focus:outline-violet-500"
        />
      </label>
      <label className="mb-5 flex justify-between">
        Number:
        <input
          type="tel"
          name="phone"
          defaultValue={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="ml-5 w-3/4 rounded	 border border-black hover:border-violet-500 focus:outline-violet-500"
        />
      </label>
      <div className="ml-auto w-fit">
        <button
          type="submit"
          className="mr-5 rounded-xl bg-violet-300 px-2 py-0.5 text-sm hover:bg-violet-500 hover:text-white"
        >
          Save
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="rounded-xl bg-violet-300 px-2 py-0.5 text-sm hover:bg-violet-500 hover:text-white"
        >
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
