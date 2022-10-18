import styled, { css } from 'styled-components';
import bgImage from '../../assets/block-4-bg.png';

const commonHeaderDesc = css`
  width: calc(100% - 20px);
  color: white;
  font-family: Raleway, Segoe UI, sans-serif;
  font-weight: 500;
  text-shadow: 0px 3px 6px #00000029;
  text-align: center;
  z-index: 1;
`;

export const FormContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 630px;
  width: 100%;
  margin: auto;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
  &:after {
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

export const FormHeader = styled.h2`
  margin-top: 85px;
  font-size: 32px;
  line-height: 55px;
  ${commonHeaderDesc}
`;

export const FormDescription = styled.p`
  margin-top: 30px;
  font-size: 16px;
  line-height: 30px;
  ${commonHeaderDesc}
`;

export const Form = styled.form`
  width: calc(100% - 20px);
  max-width: 370px;
  margin: 60px 0 100px;
  box-sizing: border-box;
  padding: 0 20px;
  z-index: 1;
  ul li input {
    font: 1em sans-serif;
    width: 100%;
    height: 50px;
    border: none;
    box-sizing: border-box;
    border: 2px solid white;
    text-indent: 30px;
  }
  ul li input::placeholder {
    color: #808080;
  }
  ul li input:hover,
  ul li input:focus {
    border: 2px solid #17ba48;
  }
  li + li {
    margin-top: 25px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 25px;
  color: white;
  background: #17ba48;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
`;
