import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 10;
  @keyframes changeOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: changeOpacity 0.5s;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 400px;
  width: 100%;
  max-height: 250px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  border-radius: 25px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  @keyframes goUp {
    0% {
      bottom: -250px;
    }
    100% {
      bottom: calc(50vh - 125px);
    }
  }
  animation: goUp 0.7s;
`;

export const ModalMessage = styled.p`
  padding: 0 40px;
  text-align: center;
  font-size: 20px;
`;

export const CloseButton = styled.button`
  background: #17ba48;
  border: none;
  width: 240px;
  height: 50px;
  border-radius: 25px;
  color: white;
  font-size: 18px;
`;
