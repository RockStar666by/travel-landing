import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  min-height: 115px;
  height: 100%;
  background: #2a2a2a;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  min-height: 115px;
  max-width: 1360px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 100px;
  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;

export const FooterInfo = styled.p`
  display: flex;
  font-size: 12px;
  line-height: 20px;
  color: #9b9b9b;
  white-space: pre-line;
  margin: 20px 0;
`;
