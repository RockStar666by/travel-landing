import React, { useState } from 'react';
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
  const [countriesNumber, setCountriesNumber] = useState(6);

  const handleShowMore = () => {
    setCountriesNumber(countriesNumber + 6);
  };

  return (
    <HotSalesContainer id='hot-sale'>
      <HotSaleHeader>ГОРЯЩИЕ ТУРЫ</HotSaleHeader>
      <CountriesContainer>
        {countriesArray
          .slice(0, countriesNumber)
          .map(({ bgImage, title, price, link }, index) => {
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
      <ShowMore
        disabled={countriesNumber >= countriesArray.length}
        onClick={handleShowMore}
      >
        <span>ПОКАЗАТЬ БОЛЬШЕ ТУРОВ</span>
      </ShowMore>
    </HotSalesContainer>
  );
};
