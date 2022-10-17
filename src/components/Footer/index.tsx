import React from 'react';
import { Socials } from '../Socials';
import { FooterContainer, FooterContent, FooterInfo } from './Footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterInfo>
          {`ООО «ФИРМА» УНП 193278938 ОКПО 381483825000
          Адрес: 220004 г. Минск, Рокоссовского, 312 телефон/факс: 226-33-73, +375 29 126 33 73, +375 29 774 33 73
          ОАО «Франсабанк», БИК – GTBNBY22 р/с BY57GTBN30128000000325394201 Адрес банка: г. Минск, пр. Независимости, 95 А`}
        </FooterInfo>
        <div>
          <Socials />
        </div>
      </FooterContent>
    </FooterContainer>
  );
};
