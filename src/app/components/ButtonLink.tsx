import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

// Style pour le composant NextLink avec gestion de la couleur de fond
const StyledNextLink = styled(NextLink)`
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: filter 0.3s, color 0.3s;

  &:hover {
    filter: brightness(1.3);
    text-shadow: 0 0 1px white;
  }
`;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  bgColor?: string;
  target?: string;
  rel?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children}) => {
  return (
    <StyledNextLink href={href}>
      {children}
    </StyledNextLink>
  );
};

export default ButtonLink;
