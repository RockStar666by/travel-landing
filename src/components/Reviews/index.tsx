import React, { useEffect, useState } from 'react';
import {
  UserAvatar,
  ReviewsContainer,
  Slider,
  UserHeader,
  UserReview,
  Slide,
  Dots,
  Dot,
  ArrowLeft,
  ArrowRight,
  SlidesContainer,
  Gallery,
  GalleryImage,
  ReviewButton,
  SlidesWrapper,
  SlidesItems
} from './Reviews.styles';

import { slides } from './slides.js';

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => handleRightArrowClick(), 6000);
    return () => clearTimeout(interval);
  });

  const handleLeftArrowClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setPosition(position - 660);
    }
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
      setPosition((slides.length - 1) * 660);
    }
    console.log(position);
  };

  const handleRightArrowClick = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setPosition(position + 660);
    }
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
      setPosition(0);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setPosition(660 * slideIndex);
  };

  return (
    <ReviewsContainer id='reviews'>
      <Slider>
        <SlidesContainer>
          <ArrowLeft onClick={handleLeftArrowClick} />
          <SlidesWrapper>
            <SlidesItems style={{ transform: `translateX(-${position}px)` }}>
              {slides.map(({ avatar, header, review }) => {
                return (
                  <Slide key={header}>
                    <UserAvatar avatar={avatar}></UserAvatar>
                    <UserHeader>{header}</UserHeader>
                    <UserReview>{review}</UserReview>
                  </Slide>
                );
              })}
            </SlidesItems>
          </SlidesWrapper>
          <ArrowRight onClick={handleRightArrowClick} />
        </SlidesContainer>

        <Dots>
          {slides.map((slide, index) => {
            return (
              <Dot
                key={slide.header}
                style={{ background: currentSlide == index ? 'gray' : 'none' }}
                onClick={() => goToSlide(index)}
              ></Dot>
            );
          })}
        </Dots>
      </Slider>
      <Gallery>
        {slides[currentSlide].photos.map((photo) => {
          return <GalleryImage key={photo} src={photo}></GalleryImage>;
        })}
      </Gallery>
      <ReviewButton>ДОБАВИТЬ ОТЗЫВ</ReviewButton>
    </ReviewsContainer>
  );
};
