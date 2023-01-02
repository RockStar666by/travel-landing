import React, { useEffect, useState } from 'react';
import {
  Background,
  BackgroundWrapper,
  CallButton,
  GreetingsBackgrounds,
  GreetingsContainer,
  GreetingsHeader,
  GreetingsTopic
} from './Greetings.styles';
import { backgrounds } from './backgrounds';

export const Greetings = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (bgIndex === backgrounds.length - 1) {
      timeout = setTimeout(() => {
        setBgIndex(0);
      }, 1000);
    } else {
      timeout = setTimeout(() => {
        setBgIndex(bgIndex + 1);
      }, 7000);
    }
    return () => clearTimeout(timeout);
  });

  return (
    <GreetingsContainer id='main'>
      <GreetingsBackgrounds>
        <BackgroundWrapper width={backgrounds.length} move={bgIndex}>
          {backgrounds.map((background, index) => (
            <Background key={index} background={background}></Background>
          ))}
        </BackgroundWrapper>
      </GreetingsBackgrounds>
      <GreetingsTopic>ТУРЫ & ПУТЁВКИ</GreetingsTopic>
      <GreetingsHeader>Дома хорошо, а в отпуске лучше!</GreetingsHeader>
      <CallButton>ЗАКАЗАТЬ ЗВОНОК</CallButton>
    </GreetingsContainer>
  );
};
