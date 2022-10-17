import React from 'react';
import { vacationsArray } from './vacations.js';
import {
  VacationCard,
  VacationDescription,
  VacationImage,
  VacationsContainer,
  VacationsHeader,
  VacationsList,
  VacationTitle
} from './Vacations.styles';

export const Vacations = () => {
  return (
    <VacationsContainer>
      <VacationsHeader>ВИДЫ ОТДЫХА</VacationsHeader>
      <VacationsList>
        {vacationsArray.map(({ bgImage, title, description }) => {
          return (
            <VacationCard key={bgImage}>
              <VacationImage bgImage={bgImage}></VacationImage>
              <VacationTitle>{title}</VacationTitle>
              <VacationDescription>{description}</VacationDescription>
            </VacationCard>
          );
        })}
      </VacationsList>
    </VacationsContainer>
  );
};
