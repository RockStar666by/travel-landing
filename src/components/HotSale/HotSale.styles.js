import styled from 'styled-components';

export const HotSalesContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1392px;
  width: 100%;
  margin: auto;
  background: #f5f5f5;
`;

export const HotSaleHeader = styled.h2`
  text-align: center;
  margin: 75px auto;
  font-size: 32px;
  font-weight: 300;
  color: #464646;
`;

export const CountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding-bottom: 30px;
  gap: 30px 15px;
  overflow: hidden;
  height: 100%;
  transition: max-height 1s ease-in;
  transform: scaleY(1);

  @media screen and (max-width: 1200px) {
    max-width: 835px;
  }

  @media screen and (max-width: 640px) {
    max-width: 440px;
  }
`;

export const CountryCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 380px;
  height: 480px;
  @media screen and (max-width: 440px) {
    width: 280px;
    height: 380px;
  }
`;

export const CardImage = styled.div`
  width: 380px;
  height: 310px;
  background: center no-repeat;
  background-size: cover;
  @media screen and (max-width: 440px) {
    width: 304px;
    height: 248px;
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  top: 280px;
  width: 348px;
  height: 200px;
  box-sizing: border-box;
  padding: 0 26px;
  background: white;
  box-shadow: 0px 3px 17px #00000029;
  @media screen and (max-width: 440px) {
    width: 248px;
    top: 180px;
  }
`;

export const CardTitle = styled.h3`
  margin-top: 16px;
  font-size: 32px;
  font-weight: 200;
  line-height: 50px;
  text-align: center;
  color: #464646;
  border-bottom: 1px solid #d9d9d9;
`;

export const CardPrice = styled.p`
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  text-align: center;
  color: #17ba48;
`;

export const CardLink = styled.a`
  display: block;
  margin-top: 20px;
  height: 45px;
  width: 100%;
  line-height: 45px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #17ba48;
  text-align: center;
  box-sizing: border-box;
  border: 2px solid #17ba48;
  &:hover {
    color: white;
    background: #17ba48;
  }
  @media screen and (max-width: 440px) {
    line-height: unset;
  }
`;

export const CardLinkSpan = styled.span``;

export const ShowMore = styled.button`
  margin-top: 30px;
  margin-bottom: 92px;
  height: 50px;
  max-width: 350px;
  width: calc(100% - 40px);
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #464646;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #464646;
  border-radius: 25px;
  background: none;
  &:hover {
    color: #17ba48;
    border: 1px solid #17ba48;
  }
  &:disabled {
    color: lightgray;
    border: 1px solid lightgray;
  }
`;
