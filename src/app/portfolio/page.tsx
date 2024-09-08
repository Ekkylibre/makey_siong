"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
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

  cursor: pointer; /* Ajoute un curseur pointer pour indiquer que c'est cliquable */
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

  cursor: pointer; /* Ajoute un curseur pointer pour indiquer que c'est cliquable */
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

// Style pour le modal de la vidéo
const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  overflow: hidden; /* Empêche le défilement */
`;

const VideoIframe = styled.iframe`
  width: 80%;
  height: 80%;
  border: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

// Déclaration des props pour ArrowButton
interface ArrowButtonProps {
  left?: boolean;
}

// Styles pour les flèches de navigation
const ArrowButton = styled.button<ArrowButtonProps>`
  position: absolute;
  ${props => props.left ? 'left: 70px;' : 'right: 70px;'}
  background: transparent; /* Retire le fond noir */
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
  font-size: 100px;
  border: none; /* Assure qu'il n'y a pas de bordure */
  outline: none; /* Retire le contour lors du focus */
`;


const getYouTubeEmbedURL = (url: string) => {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleThumbnailClick = (url: string) => {
    setSelectedVideo(getYouTubeEmbedURL(url));
  };

  const handleMainImageClick = () => {
    setSelectedVideo(getYouTubeEmbedURL(achievementsData.achievements[0].url));
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievementsData.achievements.length - 1 : prevIndex - 1));
    setSelectedVideo(getYouTubeEmbedURL(achievementsData.achievements[currentIndex].url));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === achievementsData.achievements.length - 1 ? 0 : prevIndex + 1));
    setSelectedVideo(getYouTubeEmbedURL(achievementsData.achievements[currentIndex].url));
  };

  return (
    <PortfolioContainer>
      <AchievementsList>
        <Spacer /> {/* Espace coloré en haut */}
        <MainImageContainer onClick={handleMainImageClick}>
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
          {achievementsData.achievements.slice(1).map((achievement, index) => (
            <ThumbnailCard key={achievement.id} onClick={() => handleThumbnailClick(achievement.url)}>
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

      {/* Affiche le modal de vidéo si une vidéo est sélectionnée */}
      {selectedVideo && (
        <VideoModal>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
          <ArrowButton left onClick={handlePrev}>‹</ArrowButton>
          <VideoIframe
            src={selectedVideo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <ArrowButton onClick={handleNext}>›</ArrowButton>
        </VideoModal>
      )}
    </PortfolioContainer>
  );
}
