import React from 'react';
import { Socials } from '../Socials';
import {
  CloseIcon,
  Hamburger,
  HeaderLogo,
  HeaderNav,
  ItemLink,
  MenuIcon,
  NavList,
  StyledHeader
} from './Header.styles';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <Hamburger>
        <MenuIcon />
        <CloseIcon />
      </Hamburger>
      <HeaderNav>
        <NavList>
          <li>
            <ItemLink>ГЛАВНАЯ</ItemLink>
          </li>
          <li>
            <ItemLink>ГОРЯЩИЕ ТУРЫ</ItemLink>
          </li>
          <li>
            <ItemLink>ВИДЫ ОТДЫХА</ItemLink>
          </li>
          <li>
            <ItemLink>ОТЗЫВЫ</ItemLink>
          </li>
          <li>
            <ItemLink>КОНТАКТЫ</ItemLink>
          </li>
        </NavList>
      </HeaderNav>
      <div>
        <Socials />
      </div>
    </StyledHeader>
  );
};
