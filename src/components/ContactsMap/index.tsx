import React from 'react';
import { Socials } from '../Socials';
import {
  Contacts,
  ContactsContainer,
  ContactsMapContainer,
  Map
} from './ContactsMap.styles';

export const ContactsMap = () => {
  return (
    <ContactsMapContainer>
      <Map src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.2013690138265!2d27.60369122340084!3d53.85706711112109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd1f1478dfdad%3A0x3113e0325e2567d4!2z0L_RgNC-0YHQv9C10LrRgiDQoNC-0LrQvtGB0YHQvtCy0YHQutC-0LPQviAxMjAvMiwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1650810279296!5m2!1sru!2sby' />
      <ContactsContainer>
        <h3>КОНТАКТЫ</h3>
        <Contacts>
          <a href='tel:+375291232323'>+37529 123-23-23</a>
          <br />
          <a href='tel:+375291232323'>+37529 123-23-23</a>
          <br />
          <a href='mailto:softskillminsk@gmail.com'>softskillminsk@gmail.com</a>
          <br />
          ул. Рокоссовского 120/2
        </Contacts>
        <Socials />
      </ContactsContainer>
    </ContactsMapContainer>
  );
};
