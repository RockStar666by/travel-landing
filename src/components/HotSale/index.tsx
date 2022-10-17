import React from 'react';
import {
  CardImage,
  CardInfo,
  CardLink,
  CardPrice,
  CardTitle,
  CountriesContainer,
  CountryCard,
  HotSaleHeader,
  HotSalesContainer,
  ShowMore
} from './HotSale.styles';
import { countriesArray } from '../../assets/countries';

export const HotSale = () => {
  return (
    <HotSalesContainer>
      <HotSaleHeader>ГОРЯЩИЕ ТУРЫ</HotSaleHeader>
      <CountriesContainer>
        {countriesArray.map(({ bgImage, title, price, link }, index) => {
          return (
            <CountryCard key={index}>
              <CardImage
                style={{
                  backgroundImage: `url(${bgImage})`
                }}
              ></CardImage>
              <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardPrice>от {price} у.е.</CardPrice>
                <CardLink href={link}>УЗНАТЬ ПОДРОБНОСТИ</CardLink>
              </CardInfo>
            </CountryCard>
          );
        })}
      </CountriesContainer>
      <ShowMore>
        <span>ПОКАЗАТЬ БОЛЬШЕ ТУРОВ</span>
      </ShowMore>
    </HotSalesContainer>
  );
};
