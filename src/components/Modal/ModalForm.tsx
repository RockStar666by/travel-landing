import React from 'react';
import {
  CloseButton,
  ModalContainer,
  ModalMessage,
  ModalWrapper
} from './ModalForm.styles';

export const ModalForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <ModalContainer id='modal'>
      <ModalWrapper>
        <ModalMessage>
          Ваша заявка отправлена!
          <br /> Наш специалист свяжется с Вами в ближайшее время!
        </ModalMessage>
        <CloseButton onClick={onClose}>Понятно</CloseButton>
      </ModalWrapper>
    </ModalContainer>
  );
};
