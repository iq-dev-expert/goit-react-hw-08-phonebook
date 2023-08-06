import { useContacts } from 'hooks/useContacts';
import { useGlobal } from 'hooks/useGlobal';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const { filteredContacts } = useContacts();
  const { error } = useGlobal();

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        filteredContacts.length > 0 && (
          <ul className="grid grid-cols-2 gap-5">
            {filteredContacts.map(({ id, name, number }, idx) => (
              <li key={id} className="block rounded p-5 shadow-custom-shadow">
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                  serialNumber={idx + 1}
                />
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};
