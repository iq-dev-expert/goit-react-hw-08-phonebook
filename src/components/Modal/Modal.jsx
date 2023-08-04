import { useEffect } from 'react';
import { EditForm } from 'components/EditForm/EditForm';
import { Overlay, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ toggleModal, ...props }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onEscClick);
    return () => {
      document.removeEventListener('keydown', onEscClick);
    };
  }, [toggleModal]);

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <Overlay onClick={onOverlayClick}>
      <ModalStyle>
        <EditForm toggleModal={toggleModal} {...props} />
      </ModalStyle>
    </Overlay>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
