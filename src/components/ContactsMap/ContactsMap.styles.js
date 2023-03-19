import styled from 'styled-components';

export const ContactsMapContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 615px;
  width: 100%;
  margin: auto;
  background: #d8d8d8;
`;

export const Map = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1200px) {
    position: relative;
    min-height: 615px;
  }
`;

export const ContactsContainer = styled.div`
  position: absolute;
  left: calc((100% - 1360px) / 2 + 100px);
  box-sizing: border-box;
  padding-top: 46px;
  padding-left: 57px;
  width: 370px;
  height: 370px;
  background: #17ba48;
  bottom: 0px;
  color: white;
  h3 {
    line-height: 44px;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 34px;
  }

  ul li a i {
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    left: 20px;
    height: 220px;
    width: 300px;
    padding-top: 20px;
    h3 {
      margin-bottom: 15px;
    }
  }
  @media screen and (max-width: 340px) {
    position: relative;
    left: 0;
    width: 100%;
  }
`;

export const Contacts = styled.address`
  line-height: 30px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 34px;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
