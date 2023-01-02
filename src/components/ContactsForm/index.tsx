import React, { useState } from 'react';
import {
  FormContainer,
  FormDescription,
  FormHeader
} from './ContactsForm.styles';
import { FormValidation } from './Form';

export const ContactsForm = () => {
  return (
    <FormContainer id='contacts'>
      <FormHeader>Мы ответим на любой Ваш вопрос</FormHeader>
      <FormDescription>
        Просто заполните форму и наш менеджер предоставит Вам всю информацию
      </FormDescription>
      <FormValidation />
    </FormContainer>
  );
};
