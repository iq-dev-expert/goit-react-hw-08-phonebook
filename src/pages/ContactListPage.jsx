import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactListPage = () => {
  const { fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <h1 className="mb-5 text-center text-xl font-semibold">Phonebook</h1>
      <ContactForm />

      <h2 className="mb-5 text-xl font-semibold">Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactListPage;
