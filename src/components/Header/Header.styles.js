import styled, { css } from 'styled-components';
import headerLogo from './../../assets/header-logo.svg';
import menuIcon from '../../assets/menu.png';
import closeMenuIcon from '../../assets/close.png';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 35px;
  width: 100%;
  max-width: 1170px;
  height: 81px;
  background: white;
  border-radius: 0 0 10px 10px;
  z-index: 10;
  box-shadow: 0px 3px 17px #00000029;
  @media screen and (max-width: 1200px) {
    & ul:nth-child(5) {
      display: none;
    }
  }
`;

export const HeaderLogo = styled.div`
  width: 150px;
  height: 53px;
  background: url(${headerLogo});
  @media screen and (max-width: 1200px) {
    margin-left: 50px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    position: fixed;
    justify-content: flex-start;
    transform: ${(props) =>
      props.isMenuOpened ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background: white;
    color: #464646;
    list-style: none;
    padding-top: 4rem;
  }
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 525px;

  li a {
    display: block;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 500;
    color: #464646;
    text-decoration: none;
    &:hover {
      box-sizing: border-box;
      border-bottom: 2px solid #17ba48;
      color: #17ba48;
    }
    &.active {
      box-sizing: border-box;
      border-bottom: 2px solid #17ba48;
      color: #17ba48;
    }
  }

  @media screen and (max-width: 1200px) {
    margin-left: 100px;
    justify-self: flex-start;
    flex-direction: column;
    width: 250px;
    height: 400px;

    li a {
      font-size: 30px;
      line-height: 44px;
      height: 50px;
      padding-left: 10px;

      &:hover {
        border: none;
      }
      &.active {
        border: 2px solid #17ba48;
        border-right: none;
        border-radius: 25px 0 0 25px;
      }
    }
  }
`;

export const Hamburger = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 100;
  left: 20px;
  padding: 4px;
  border: none;
  background: white;
  cursor: pointer;
  i {
    width: 32px;
    height: 32px;
    background-size: cover;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  display: ${(props) => (props.isMenuOpened ? 'block' : 'none')};
  width: 100vw;
  height: 1000vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const MenuIcon = styled.i`
  display: ${(props) => (props.isMenuOpened ? 'none' : 'block')};
  background: url(${menuIcon}) center no-repeat;
`;

export const CloseIcon = styled.i`
  display: ${(props) => (props.isMenuOpened ? 'block' : 'none')};
  background: url(${closeMenuIcon});
`;
