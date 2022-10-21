import styled from 'styled-components';
import greetingImage from './../../assets/block-1-bg.png';
import arrowImage from './../../assets/down-arrow.png';

export const GreetingsContainer = styled.section`
  scroll-margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
  width: 100%;
  margin: auto;
  background: url(${greetingImage}) no-repeat center;
  background-size: cover;
  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(269deg, #248ebb 0%, #acd44d 100%);
    opacity: 0.55;
  }
`;

export const GreetingsHeader = styled.h1`
  margin: 225px 70px 0;
  max-width: 1050px;
  color: #ffffff;
  font-size: 32px;
  line-height: 50px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0px 3px 6px #00000029;
  white-space: pre-line;
  z-index: 1;
`;

export const CallButton = styled.button`
  display: block;
  cursor: pointer;
  margin-top: 65px;
  width: 240px;
  height: 50px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 25px;
  background: none;
  z-index: 1;
  &:hover {
    border: 1px solid #17ba48;
    background: #17ba48;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(${arrowImage}) center no-repeat;
  background-size: cover;
  animation: MoveUpDown 1.5s ease-in-out infinite;
  z-index: 1;
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 50px;
    }
    50% {
      bottom: 100px;
    }
  }
`;
