import React from 'react';
import {
  Form,
  FormButton,
  FormContainer,
  FormDescription,
  FormHeader
} from './ContactsForm.styles';

export const ContactsForm = () => {
  return (
    <FormContainer>
      <FormHeader>Мы ответим на любой Ваш вопрос</FormHeader>
      <FormDescription>
        Просто заполните форму и наш менеджер предоставит Вам всю информацию
      </FormDescription>
      <Form>
        <ul>
          <li>
            <input
              placeholder='Имя'
              type='text'
              id='name'
              name='user_name'
              required
            />
          </li>
          <li>
            <input
              placeholder='Телефон +375(__)_______'
              type='tel'
              id='tel'
              name='user_tel'
              pattern='^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$'
              required
            />
          </li>
          <li>
            <input
              placeholder='E-mail'
              type='email'
              id='mail'
              name='user_mail'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              required
            />
          </li>
          <li>
            <FormButton type='submit'>ОТПРАВИТЬ</FormButton>
          </li>
        </ul>
      </Form>
    </FormContainer>
  );
};
