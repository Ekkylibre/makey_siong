"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from '../../../theme';

// Conteneur principal de la barre de navigation
const NavbarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hidden', 'transparent'].includes(prop),
}) <{ hidden: boolean; transparent: boolean }>`
  position: fixed;
  top: ${props => (props.hidden ? '-100px' : '0')}; /* Ajuste la position en fonction de la visibilité */
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => (props.transparent ? 'transparent' : colors.primary)};
  box-shadow: ${props => (props.transparent ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)')};
  height: 100px;
  z-index: 1000;
  transition: top 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Transition fluide pour le déplacement */
`;

// Conteneur pour le logo
const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

// Conteneur des éléments de navigation
const NavItems = styled.div`
  display: flex;
  gap: 7vw;
  align-items: center;
`;

// Style des éléments de navigation
const NavItem = styled(Link)`
  text-decoration: none; /* Pas de soulignement par défaut */
  color: white;
  font-size: 1rem;
  position: relative; /* Nécessaire pour le positionnement de la pseudo-élément */
  &:hover {
    text-shadow: 0 0 2px white;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: -2px; /* Ajustez la position du soulignement */
    left: 0;
    width: 100%;
    height: 1px; /* Épaisseur du soulignement */
    background-color: white; /* Couleur du soulignement */
    transform: scaleX(0); /* Initialement invisible */
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  &:hover:before {
    transform: scaleX(1); /* Affiche le soulignement au survol */
    transform-origin: bottom left;
  }
`;

// Conteneur principal du contenu
const MainContent = styled.div`
  /* padding-top: 100px; Assure que le contenu commence sous la navbar */
  background-color: ${colors.primary};
`;

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setNavbarHidden(currentPosition > scrollPosition && currentPosition > 100);
      setNavbarTransparent(currentPosition === 0);

      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <NavbarContainer hidden={navbarHidden} transparent={navbarTransparent}>
        <Logo href="/">
          <Image
            src="/mk_vision.png"
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
      </NavbarContainer>
      <MainContent>
      </MainContent>
    </>
  );
}
