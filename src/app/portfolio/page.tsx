"use client";
import React from 'react';
import styled from 'styled-components';
import { colors, padding } from '../theme';

// Composant principal pour le Portfolio
const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Hauteur de 100% de la vue */
  overflow: hidden; /* Empêche le défilement si le contenu dépasse */
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajuste la hauteur selon tes besoins */
  background-color: ${colors.secondary};
  color: white;
  padding: 10em; /* Réduit le padding pour mieux ajuster la mise en page */
`;

const BannerTitle = styled.h1`
  font-size: 2.5em; /* Ajuste la taille de la police selon tes besoins */
  margin-top: 2em;
`;

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <Banner>
        <BannerTitle>MES RÉALISATIONS</BannerTitle>
      </Banner>
    </PortfolioContainer>
  );
}
