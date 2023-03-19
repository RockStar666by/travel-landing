import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  FormContainer,
  FormDescription,
  FormHeader
} from './ContactsForm.styles';
import { FormValidation } from './Form';
import { ModalForm } from '../Modal/ModalForm';

const onSubmit = (setState: (a: boolean) => void) => {
  setState(true);
  if (typeof window != 'undefined' && window.document) {
    document.body.style.overflow = 'hidden';
  }

  setTimeout(() => {
    onClose(setState);
  }, 10000);
};

const onClose = (setState: (a: boolean) => void) => {
  setState(false);
  document.body.style.overflow = 'unset';
};

export const ContactsForm = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <FormContainer id='contacts'>
      <FormHeader>Мы ответим на любой Ваш вопрос</FormHeader>
      <FormDescription>
        Просто заполните форму и наш менеджер предоставит Вам всю информацию
      </FormDescription>
      <FormValidation onSubmit={() => onSubmit(setShowModal)} />
      {showModal &&
        createPortal(
          <ModalForm onClose={() => onClose(setShowModal)} />,
          document.body
        )}
    </FormContainer>
  );
};
