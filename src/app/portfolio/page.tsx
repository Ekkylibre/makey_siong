"use client";
import React from 'react';
import styled from 'styled-components';
import { colors, padding } from '../theme';
import Image from 'next/image'; // Importation du composant Image
import achievementsData from '../data/achievements.json';

// Composant principal pour le Portfolio
const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Empêche le défilement si le contenu dépasse */
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  height: 100px; /* Hauteur de l'espace coloré */
  background-color: ${colors.secondary}; /* Couleur de l'espace */
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 500px; /* Ajuste la hauteur selon tes besoins */
  position: relative;
  overflow: hidden;

  &:hover .main-overlay {
    opacity: 1;
  }
  
  &:hover .main-title {
    opacity: 1;
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
`;

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ThumbnailCard = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover .thumbnail-overlay {
    opacity: 1;
  }
  
  &:hover .thumbnail-title {
    opacity: 1;
  }
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.5; /* Appliquer une opacité noire au survol */
  }
`;

const ThumbnailTitle = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: white;
  padding: 0.5em;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2); /* Opacité noire au survol */
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const MainOverlay = styled(Overlay)`
  /* Style spécifique pour l'overlay de la principale image */
`;

const MainTitle = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: white;
  padding: 0.5em;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <AchievementsList>
        <Spacer /> {/* Espace coloré en haut */}
        <MainImageContainer>
          <MainImage>
            <Image 
              src={achievementsData.achievements[0].imageSrc}
              alt={achievementsData.achievements[0].title}
              layout="fill" // Utilise "fill" pour occuper toute la largeur
              objectFit="cover" // Ajuste l'image pour couvrir l'espace
            />
          </MainImage>
          <MainOverlay className="main-overlay" />
          <MainTitle className="main-title">{achievementsData.achievements[0].title}</MainTitle>
        </MainImageContainer>
        <Spacer /> {/* Espace coloré en bas */}
        <ThumbnailContainer>
          {achievementsData.achievements.slice(1).map((achievement) => (
            <ThumbnailCard key={achievement.id}>
              <ThumbnailImage
                src={achievement.imageSrc}
                alt={achievement.title}
                layout="responsive" // Maintient le ratio de l'image
                width={1000} // Largeur pour le calcul du ratio
                height={600} // Hauteur pour le calcul du ratio
              />
              <Overlay className="thumbnail-overlay" />
              <ThumbnailTitle className="thumbnail-title">{achievement.title}</ThumbnailTitle>
            </ThumbnailCard>
          ))}
        </ThumbnailContainer>
      </AchievementsList>
    </PortfolioContainer>
  );
}
