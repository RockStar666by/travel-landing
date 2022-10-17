import React from 'react';
import {
  CloseIcon,
  Hamburger,
  HeaderLogo,
  HeaderNav,
  InstIcon,
  ItemLink,
  MenuIcon,
  NavList,
  OkIcon,
  SocialLinks,
  StyledHeader,
  VkIcon
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
        <SocialLinks>
          <li>
            <a>
              <VkIcon />
            </a>
          </li>
          <li>
            <a>
              <InstIcon />
            </a>
          </li>
          <li>
            <a>
              <OkIcon />
            </a>
          </li>
        </SocialLinks>
      </div>
    </StyledHeader>
  );
};
