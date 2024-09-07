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
const HomeLink = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: underline;
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>Erreur : Page non trouvée !</Title>
      <Link href="/" passHref>
        <HomeLink>Retour à la page d’accueil</HomeLink>
      </Link>
    </Container>
  );
};

export default NotFound;
