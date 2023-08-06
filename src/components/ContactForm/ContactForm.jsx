import { useContacts } from 'hooks/useContacts';

export const ContactForm = () => {
  const { contacts, addContact } = useContacts();

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.phone.value;

    if (isContactInPhonebook(name)) {
      alert(`${name} is already in contacts.`);
      form.reset();
      return;
    }

    addContact({ name, number });
    form.reset();
  };

  const isContactInPhonebook = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <form onSubmit={onSubmit} className="form-primary">
      <label className="label-space-between">
        Name*:
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="input-primary"
        />
      </label>
      <label className="label-space-between">
        Number*:
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="input-primary"
        />
      </label>
      <button type="submit" className="btn-primary">
        Add contact
      </button>
    </form>
  );
};
