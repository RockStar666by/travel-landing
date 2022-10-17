import React from 'react';
import { InstIcon, OkIcon, SocialLinks, VkIcon } from './Socials.styles';

export const Socials = () => {
  return (
    <SocialLinks>
      <li>
        <a>
          <VkIcon />
        </a>
      </li>
      <li>
        <a>
          <InstIcon />
        </a>
      </li>
      <li>
        <a>
          <OkIcon />
        </a>
      </li>
    </SocialLinks>
  );
};
