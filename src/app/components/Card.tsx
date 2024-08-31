import React from 'react';
import styled from 'styled-components';

// Style pour la carte avec effet de zoom au survol
const CardContainer = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #0e232d;
  color: white;
  transition: transform 1s ease; // Transition pour l'effet de zoom

  &:hover {
    transform: scale(1.05); // Agrandir la carte au survol
  }
`;

// Style pour l'image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Style pour le texte
const CardContent = styled.div`
  padding: 16px;
`;

// Style pour le titre
const CardTitle = styled.h3`
  margin-bottom: 16px; // Ajustez la valeur pour l'espacement désiré
`;

// Style pour le bouton
const CardButton = styled.button`
  background-color: #0e232d; /* Couleur de fond initiale */
  color: white; /* Couleur du texte */
  border: 1px solid white; /* Bordure bleue */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.3s, color 0.3s; /* Transition pour l'effet de luminosité */
  margin-top: 24px;
  
  /* Applique un léger effet de luminosité */
  &:hover {
    filter: brightness(1.3); /* Augmente la luminosité de 30% au survol */
    color: #007bff; /* Change la couleur du texte au survol */
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
