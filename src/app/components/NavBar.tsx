"use client";
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  gap: 7rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  &:hover {
    color: #007bff;
  }
`;

const QuoteButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function NavBar() {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <NavItems>
        <NavItem href="/">HOME</NavItem>
        <NavItem href="portfolio">PORTEFOLIO</NavItem>
        <NavItem href="contact">CONTACT</NavItem>
      </NavItems>
      <QuoteButton>Devis Gratuit</QuoteButton>
    </NavbarContainer>
  );
}
