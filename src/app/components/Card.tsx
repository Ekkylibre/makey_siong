import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';
import { colors } from '../theme';

// Style pour la carte avec effet de zoom au survol
const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: ${colors.tertiary};
  color: white;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Style pour l'image
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

// Style pour le texte
const CardContent = styled.div`
  padding: 24px;
  height: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Style pour le titre
const CardTitle = styled.h3`
  margin-bottom: 24px;
`;

// Style pour la description
const Description = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 1.5em;
  max-height: 4.5em;
  margin: 0;
`;

// Mise à jour du type CardProps pour inclure l'URL
type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  url: string; // Ajout de la prop url
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description, url }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Description>{description}</Description>
        <ButtonLink href={url} target="_blank" rel="noopener noreferrer">
          En savoir plus
        </ButtonLink>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
