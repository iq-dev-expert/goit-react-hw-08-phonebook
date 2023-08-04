import { useContacts } from 'hooks/useContacts';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const { filteredContacts, error } = useContacts();

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        filteredContacts.length > 0 && (
          <List>
            {filteredContacts.map(({ id, name, number }, idx) => (
              <li key={id}>
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                  serialNumber={idx + 1}
                />
              </li>
            ))}
          </List>
        )
      )}
    </>
  );
};
