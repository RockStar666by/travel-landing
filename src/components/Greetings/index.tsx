import React from 'react';
import {
  ArrowDown,
  CallButton,
  GreetingsContainer,
  GreetingsHeader
} from './Greetings.styles';

export const Greetings = () => {
  return (
    <GreetingsContainer>
      <GreetingsHeader>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </GreetingsHeader>
      <CallButton>ЗАКАЗАТЬ ЗВОНОК</CallButton>
      <ArrowDown></ArrowDown>
    </GreetingsContainer>
  );
};
