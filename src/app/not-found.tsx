"use client";
import React from 'react';
import styled from 'styled-components';
import { colors } from './theme';
import Link from 'next/link';

// Création d'un conteneur pour la page d'erreur
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.secondary};
  color: white;
  font-family: Arial, sans-serif;
`;

// Style du titre d'erreur
const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 4rem; 
`;

// Style du lien
const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: white;
  text-decoration: underline;
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>Erreur : Page non trouvée !</Title>
      <StyledLink href="/">Retour à la page d’accueil</StyledLink>
    </Container>
  );
};

export default NotFound;
