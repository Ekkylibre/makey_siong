import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

// Style pour la carte avec effet de zoom au survol
const CardContainer = styled.div`
  width: 400px; // Largeur fixe de la carte
  height: 500px; // Hauteur fixe pour la carte
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5); // Ombre pour correspondre à la taille
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
  height: 300px; // Hauteur fixe de l'image
  object-fit: cover;
`;

// Style pour le texte
const CardContent = styled.div`
  padding: 24px; // Padding interne
  height: calc(100% - 300px); // Hauteur du contenu ajustée en fonction de la hauteur totale et de la hauteur de l'image
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Évite que le contenu dépasse de la carte
`;

// Style pour le titre
const CardTitle = styled.h3`
  margin-bottom: 24px; // Espacement sous le titre
`;

// Style pour la description
const Description = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; // Limite à 3 lignes
  line-height: 1.5em; // Hauteur de ligne pour le texte
  max-height: 4.5em; // Hauteur maximale basée sur la hauteur de ligne
  margin: 0; // Assure que le marges ne causent pas de débordement
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
        <Description>{description}</Description>
        <ButtonLink href="" target="_blank" rel="noopener noreferrer">
          En savoir plus
        </ButtonLink>
      </CardContent>
      
    </CardContainer>
  );
};

export default Card;
