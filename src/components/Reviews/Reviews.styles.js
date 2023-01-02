import styled from 'styled-components';
import arrowImage from '../../assets/arrow-right.png';

export const ReviewsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1126px;
  width: 100%;
  margin: auto;
  background: #f5f5f5;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  width: 940px;
  height: 430px;
`;

export const SlidesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 940px;
  height: 375px;
`;

export const SlidesWrapper = styled.div`
  position: relative;
  width: 660px;
  height: 375px;
  overflow: hidden;
`;

export const SlidesItems = styled.div`
  position: absolute;
  display: inline-flex;
  transition: 1s ease-in-out;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 660px;
  height: 375px;
`;

export const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${(props) => props.avatar});
  background-size: cover;
`;

export const UserHeader = styled.h3`
  margin-top: 50px;
  font-size: 32px;
  color: #17ba48;
`;

export const UserReview = styled.p`
  margin-top: 54px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
`;

export const Dots = styled.div`
  display: flex;
  gap: 17px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid gray;
  &:hover {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
  }
  transition: 0.1s ease-in;
`;

export const ArrowLeft = styled.div`
  margin-top: 180px;
  width: 11px;
  height: 25px;
  transform: scaleX(-1);
  background: url(${arrowImage});
  &:hover {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
  }
  transition: 0.1s ease-in;
`;

export const ArrowRight = styled.div`
  margin-top: 180px;
  width: 11px;
  height: 25px;
  background: url(${arrowImage});
  &:hover {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
  }
  transition: 0.1s ease-in;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
  width: 1170px;
  height: 275px;
`;

export const GalleryImage = styled.img`
  width: 380px;
  height: 275px;
  object-fit: cover;
  border: 0;
  @keyframes changeOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: changeOpacity 1.5s;
`;

export const ReviewButton = styled.button`
  margin-top: 65px;
  margin-bottom: 92px;
  height: 50px;
  width: 350px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #464646;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #464646;
  border-radius: 25px;
  background: none;
  &:hover {
    color: #17ba48;
    border: 1px solid #17ba48;
  }
  &:disabled {
    color: lightgray;
    border: 1px solid lightgray;
  }
`;
