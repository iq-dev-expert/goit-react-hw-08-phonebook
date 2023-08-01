import { Modal } from 'components/Modal/Modal';
import { useContacts } from 'hooks/useContacts';
import { useState } from 'react';
import { Button } from 'utils-style/Template.styled';

export const ContactItem = ({ id, name, number, contactNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteContact } = useContacts();

  const useToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

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
      <Button type="button" onClick={useToggle}>
        Edit
      </Button>
      {isModalOpen && (
        <Modal toggleModal={useToggle} id={id} name={name} number={number} />
      )}
    </>
  );
};
