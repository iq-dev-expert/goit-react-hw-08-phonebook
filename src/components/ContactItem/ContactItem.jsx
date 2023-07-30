import { useContacts } from 'hooks/useContacts';
import { Button } from 'utils-style/Template.styled';

export const ContactItem = ({ id, name, number, contactNumber }) => {
  const { deleteContact, editContact } = useContacts();
  return (
    <>
      <span>#{contactNumber}==</span>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Button>
      <Button
        type="button"
        onClick={() => {
          editContact(id);
        }}
      >
        Edit
      </Button>
    </>
  );
};
