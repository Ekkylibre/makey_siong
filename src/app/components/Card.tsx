import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';
import { colors, fonts } from '../theme';

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
  font-family: ${fonts.secondary};
  font-size: 24px;
`;

// Style pour la description
const Description = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${fonts.primary};
  display: flex;
  align-items: center;
`;

// Style pour la div englobante du bouton
const ButtonContainer = styled.div`
  background-color: ${colors.tertiary};
`;

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  url: string;
  buttonBgColor?: string; // Ajout de la prop buttonBgColor
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description, url}) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Description>{description}</Description>
        <ButtonContainer>
          <ButtonLink
            href={url}>
            En savoir plus
          </ButtonLink>
        </ButtonContainer>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
