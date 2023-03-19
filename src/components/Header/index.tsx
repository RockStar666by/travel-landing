import React, { useEffect, useState } from 'react';
import { Socials } from '../Socials';
import {
  CloseIcon,
  Hamburger,
  HeaderLogo,
  HeaderNav,
  MenuIcon,
  NavList,
  Overlay,
  StyledHeader
} from './Header.styles';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
  }, [isOpen]);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledHeader>
      <HeaderLogo />
      <Hamburger onClick={handleBurgerClick}>
        <MenuIcon isMenuOpened={isOpen} />
        <CloseIcon isMenuOpened={isOpen} />
      </Hamburger>
      <Overlay isMenuOpened={isOpen} onClick={handleBurgerClick}></Overlay>
      <HeaderNav isMenuOpened={isOpen}>
        <NavList>
          <li>
            <Link
              onClick={handleLinkClick}
              activeClass='active'
              spy
              to='main'
              offset={-30}
            >
              ГЛАВНАЯ
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              activeClass='active'
              spy
              to='hot-sale'
              offset={-30}
            >
              ГОРЯЩИЕ ТУРЫ
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              activeClass='active'
              spy
              to='vacations'
              offset={-30}
            >
              ВИДЫ ОТДЫХА
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              activeClass='active'
              spy
              to='reviews'
              offset={-30}
            >
              ОТЗЫВЫ
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              activeClass='active'
              spy
              to='contacts'
            >
              КОНТАКТЫ
            </Link>
          </li>
        </NavList>
      </HeaderNav>
      <Socials />
    </StyledHeader>
  );
};
