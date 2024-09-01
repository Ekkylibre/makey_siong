// ButtonLink.tsx
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledButtonLink = styled.a`
  background-color: #0e232d;
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
    color: #007bff;
  }
`;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, target = '_self', rel = 'noopener noreferrer' }) => {
  // Vérifie si le lien est interne ou externe
  const isInternalLink = href.startsWith('/');

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <StyledButtonLink>{children}</StyledButtonLink>
      </NextLink>
    );
  }

  return (
    <StyledButtonLink href={href} target={target} rel={rel}>
      {children}
    </StyledButtonLink>
  );
};

export default ButtonLink;
