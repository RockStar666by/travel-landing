import styled from 'styled-components';
import vkIcon from './../../assets/vk-icon.svg';
import instIcon from './../../assets/instagram-icon.svg';
import okIcon from './../../assets/ok-icon.svg';

export const SocialLinks = styled.ul`
  width: 120px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  li a i {
    display: inline-block;
    height: 30px;
    width: 30px;
    box-sizing: border-box;
    border: 1px solid #1773ba;
    border-radius: 50%;
  }
`;

export const VkIcon = styled.i`
  background: url(${vkIcon}) center no-repeat;
`;

export const InstIcon = styled.i`
  background: url(${instIcon}) center no-repeat;
`;

export const OkIcon = styled.i`
  background: url(${okIcon}) center no-repeat;
`;
