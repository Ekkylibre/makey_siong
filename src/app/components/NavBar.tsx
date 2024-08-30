"use client";
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0e232d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  height: 100px;
`;

const Logo = styled.div`
  img {
    height: 60px; /* Ajustez la hauteur du logo selon vos besoins */
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 7rem;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  &:hover {
    color: #0056b3;
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
            <Logo>
                <Image 
                    src="/mk.png"
                    alt="Logo" 
                    width={100}
                    height={100}
                    quality={100}
                />
            </Logo>
            <NavItems>
                <NavItem href="/">HOME</NavItem>
                <NavItem href="/portfolio">PORTFOLIO</NavItem>
                <NavItem href="/contact">CONTACT</NavItem>
            </NavItems>
            <QuoteButton>Devis Gratuit</QuoteButton>
        </NavbarContainer>
    );
}
