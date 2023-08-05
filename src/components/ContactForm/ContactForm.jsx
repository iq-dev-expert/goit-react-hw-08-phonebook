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
    <form
      onSubmit={onSubmit}
      className="mx-auto mb-5 flex w-2/5 flex-col rounded p-5 shadow-custom-shadow"
    >
      <label className="mb-5 flex justify-between">
        Name*:
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="w-3/4 rounded	 border border-black hover:border-violet-500 focus:outline-violet-500"
        />
      </label>
      <label className="mb-5 flex justify-between">
        Number*:
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="w-3/4 rounded	 border border-black hover:border-violet-500 focus:outline-violet-500"
        />
      </label>
      <button
        type="submit"
        className="mx-auto rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white"
      >
        Add contact
      </button>
    </form>
  );
};
