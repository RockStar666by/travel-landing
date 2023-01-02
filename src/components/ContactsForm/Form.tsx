import React, { useState } from 'react';

import { ErrorMessage, Form, FormButton } from './ContactsForm.styles';

const initialState = {
  username: '',
  email: '',
  phoneNumber: '',
  nameError: '',
  emailError: '',
  phoneNumberError: ''
};

export const FormValidation = (props: any) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event: any) => {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const validate = () => {
    let nameError = '';
    let emailError = '';
    let phoneNumberError = '';
    if (!formState.username || formState.username.length < 3) {
      nameError = 'Имя должно состоять из 3 и более символов';
    }
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formState.email || regEmail.test(formState.email) === false) {
      emailError = 'Введён неверный e-mail';
    }
    const regPhone = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    if (
      !formState.phoneNumber ||
      regPhone.test(formState.phoneNumber) === false
    ) {
      phoneNumberError = 'Неверный формат номера';
    }
    if (emailError || nameError || phoneNumberError) {
      setFormState({
        ...formState,
        emailError,
        nameError,
        phoneNumberError
      });
    }
    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event?.preventDefault();
    if (validate()) {
      props.onSubmit([formState]);
      setFormState(initialState);
    }
  };

  return (
    <Form>
      <ul>
        <li>
          <input
            type='text'
            name='username'
            placeholder='Имя'
            value={formState.username}
            onChange={handleInputChange}
          />
          {formState.nameError && (
            <ErrorMessage>{formState.nameError}</ErrorMessage>
          )}
        </li>
        <li>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            value={formState.email}
            onChange={handleInputChange}
          />
          {formState.emailError && (
            <ErrorMessage>{formState.emailError}</ErrorMessage>
          )}
        </li>
        <li>
          <input
            type='text'
            name='phoneNumber'
            placeholder='Телефон  +375(__)_______'
            value={formState.phoneNumber}
            onChange={handleInputChange}
          />
          {formState.phoneNumberError && (
            <ErrorMessage>{formState.phoneNumberError}</ErrorMessage>
          )}
        </li>
        <li>
          <FormButton type='submit' onClick={handleSubmit}>
            ОТПРАВИТЬ
          </FormButton>
        </li>
      </ul>
    </Form>
  );
};
