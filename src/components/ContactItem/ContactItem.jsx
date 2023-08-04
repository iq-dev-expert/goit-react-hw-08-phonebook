import { useState } from 'react';
import { useContacts } from 'hooks/useContacts';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'utils-style/Template.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, serialNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteContact } = useContacts();

  const useToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <span>#{serialNumber}==</span>
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  serialNumber: PropTypes.number.isRequired,
};
