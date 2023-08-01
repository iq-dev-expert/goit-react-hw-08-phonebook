import { useEffect } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';
import { EditForm } from 'components/EditForm/EditForm';

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
