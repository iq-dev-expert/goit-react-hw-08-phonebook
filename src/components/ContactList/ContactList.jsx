import { List } from './ContactList.styled';
import { Button } from 'utils-style/Template.styled';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
  const { filteredContacts, deleteContact, error } = useContacts();

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        filteredContacts.length > 0 && (
          <List>
            {filteredContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <p>
                    {name}: {number}{' '}
                  </p>
                  <Button
                    type="button"
                    onClick={() => {
                      deleteContact(id);
                    }}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
          </List>
        )
      )}
    </>
  );
};
