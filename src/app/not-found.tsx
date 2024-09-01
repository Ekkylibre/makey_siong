"use client";
import React from 'react';
import styled from 'styled-components';

// Création d'un conteneur pour la page d'erreur
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8d7da;
  color: #721c24;
  font-family: Arial, sans-serif;
`;

// Style du titre d'erreur
const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 0;
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>Erreur : Page non trouvée !</Title>
    </Container>
  );
};

export default NotFound;
