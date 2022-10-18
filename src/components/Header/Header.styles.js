import styled from 'styled-components';
import headerLogo from './../../assets/header-logo.svg';

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
`;

export const HeaderLogo = styled.div`
  width: 150px;
  height: 53px;
  background: url(${headerLogo});
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 525px;
`;

export const ItemLink = styled.a`
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
  .active {
    box-sizing: border-box;
    border-bottom: 2px solid #17ba48;
    color: #17ba48;
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
`;

export const MenuIcon = styled.i`
  background: url('/assets/menu.png') center no-repeat;
`;

export const CloseIcon = styled.i`
  background: url('/assets/close.png');
`;
