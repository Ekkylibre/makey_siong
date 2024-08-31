import React from 'react';
import styled from 'styled-components';

// Style pour la carte avec effet de zoom au survol
const CardContainer = styled.div`
  width: 400px; // Augmenter la largeur de la carte
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5); // Ajuster l'ombre pour correspondre à la taille
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #0e232d;
  color: white;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Style pour l'image
const CardImage = styled.img`
  width: 100%;
  height: 300px; // Augmenter la hauteur de l'image
  object-fit: cover;
`;

// Style pour le texte
const CardContent = styled.div`
  padding: 24px; // Augmenter le padding interne
`;

// Style pour le titre
const CardTitle = styled.h3`
  margin-bottom: 24px; // Augmenter l'espacement sous le titre
`;

// Style pour le bouton
const CardButton = styled.button`
  background-color: #0e232d;
  color: white;
  border: 1px solid white;
  padding: 0.75rem 1.5rem; // Augmenter le padding du bouton
  font-size: 1.2rem; // Augmenter la taille de la police
  cursor: pointer;
  transition: filter 0.3s, color 0.3s;
  margin-top: 32px; // Augmenter l'espacement au-dessus du bouton
  
  &:hover {
    filter: brightness(1.3);
    color: #007bff;
  }
`;

// Composant Card
type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <CardButton>En savoir plus</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
