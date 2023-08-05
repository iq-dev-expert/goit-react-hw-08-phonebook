import { useEffect } from 'react';
import { EditForm } from 'components/EditForm/EditForm';
import PropTypes from 'prop-types';

export const Modal = ({ closeModal, ...props }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', onEscClick);
    return () => {
      document.removeEventListener('keydown', onEscClick);
    };
  }, [closeModal]);

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={onOverlayClick}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-backdrop-color"
    >
      <div className="max-h-full max-w-full">
        <EditForm closeModal={closeModal} {...props} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
