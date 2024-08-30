"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

// Conteneur principal de la barre de navigation
const NavbarContainer = styled.div<{ hidden: boolean }>`
  position: fixed;
  top: ${props => (props.hidden ? '-100px' : '0')}; /* Ajuste la position en fonction de la visibilité */
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0e232d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  height: 100px;
  z-index: 1000;
  transition: top 0.3s ease; /* Transition fluide pour le déplacement */
`;

// Conteneur pour le logo
const Logo = styled.div`
  /* Pas de styles CSS directs appliqués à l'image */
`;

// Conteneur des éléments de navigation
const NavItems = styled.div`
  display: flex;
  gap: 7vw;
`;

// Style des éléments de navigation
const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  &:hover {
    color: #0056b3;
  }
`;

// Style du bouton de devis
const QuoteButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: #0056b3;
  }
`;

// Conteneur principal du contenu
const MainContent = styled.div`
  padding-top: 100px; /* Assure que le contenu commence sous la navbar */
  background-color: #0e232d;
`;

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > scrollPosition && currentPosition > 100) {
        setNavbarHidden(true); // Masquer la navbar si on défile vers le bas
      } else {
        setNavbarHidden(false); // Afficher la navbar si on défile vers le haut
      }
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <NavbarContainer hidden={navbarHidden}>
        <Logo>
          <Image 
            src="/mk.png"
            alt="Logo"
            width={80}
            height={80}
            quality={100}
            priority
          />
        </Logo>
        <NavItems>
          <NavItem href="/">HOME</NavItem>
          <NavItem href="/#services">SERVICES</NavItem>
          <NavItem href="/portfolio">PORTFOLIO</NavItem>
          <NavItem href="/contact">CONTACT</NavItem>
        </NavItems>
        <QuoteButton>Devis Gratuit</QuoteButton>
      </NavbarContainer>
      <MainContent>
      </MainContent>
    </>
  );
}
