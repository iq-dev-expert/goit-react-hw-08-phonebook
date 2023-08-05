import { useState } from 'react';
import { useContacts } from 'hooks/useContacts';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, serialNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteContact } = useContacts();

  const openModal = e => {
    setIsModalOpen(true);
    const currentButton = e.target;
    currentButton.blur();
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="mb-5 flex items-center">
        <span className="mr-2.5 inline-flex rounded-full bg-violet-500 px-2.5 py-0.5 text-white">
          {serialNumber}
        </span>
        <div>
          <p className="text-gray-500">
            Name: <span className="text-black">{name}</span>
          </p>
          <p className="text-gray-500">
            Phone: <span className="text-black">{number}</span>
          </p>
        </div>
      </div>
      <div className="ml-auto w-fit">
        <button
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
          className="mr-5 rounded-xl bg-violet-300 px-2 py-0.5 text-sm hover:bg-violet-500 hover:text-white"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={openModal}
          className="rounded-xl bg-violet-300 px-2 py-0.5 text-sm hover:bg-violet-500 hover:text-white"
        >
          Edit
        </button>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} id={id} name={name} number={number} />
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
