import styled from 'styled-components';

export const VacationsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 682px;
  width: 100%;
  margin: auto;
`;

export const VacationsHeader = styled.h2`
  text-align: center;
  margin: 75px auto;
  font-size: 32px;
  font-weight: 300;
  color: #464646;
`;

export const VacationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding-bottom: 35px;
  gap: 100px;
  overflow: hidden;
  transition: max-height 1s ease-in;
`;

export const VacationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 340px;
`;

export const VacationImage = styled.div`
  width: 180px;
  height: 180px;
  background-color: #707070;
  border-radius: 50%;
  background-image: url(${(props) => props.bgImage});
`;

export const VacationTitle = styled.h3`
  margin-top: 50px;
  line-height: 30px;
  font-size: 22px;
  font-weight: 500;
  color: #464646;
`;

export const VacationDescription = styled.p`
  margin-top: 30px;
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: #464646;
  white-space: pre-line;
`;
