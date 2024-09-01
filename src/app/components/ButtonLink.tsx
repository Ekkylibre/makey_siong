// Link.tsx
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
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

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

const Link: React.FC<LinkProps> = ({ href, children, target = '_self', rel = 'noopener noreferrer' }) => {
  return (
    <StyledLink href={href} target={target} rel={rel}>
      {children}
    </StyledLink>
  );
};

export default Link;
