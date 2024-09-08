import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import achievementsData from '../data/achievements.json'; // Assure-toi que le chemin est correct

interface CarouselProps {
  selectedVideo: string;
  onClose: () => void;
}

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
  overflow: hidden;
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
  border-radius: 50%;
  font-size: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.secondary}; // Utilise une couleur différente au survol
  }
`;

const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  ${props => props.left ? 'left: 20px;' : 'right: 20px;'}
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 10px;
  border-radius: 50%;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2); // Effet de survol léger
    color: ${colors.primary}; // Change la couleur de l'icône au survol
  }
`;

const getYouTubeEmbedURL = (url: string) => {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const Carousel: React.FC<CarouselProps> = ({ selectedVideo, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    // Trouver l'index de la vidéo sélectionnée dans les données
    return achievementsData.achievements.findIndex((video: { url: string }) => video.url === selectedVideo);
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : achievementsData.achievements.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < achievementsData.achievements.length - 1 ? prevIndex + 1 : 0));
  };

  const embedURL = getYouTubeEmbedURL(achievementsData.achievements[currentIndex].url);

  return (
    <VideoModal>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ArrowButton left onClick={handlePrev}>◀</ArrowButton>
      <ArrowButton onClick={handleNext}>▶</ArrowButton>
      <VideoIframe
        src={embedURL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoModal>
  );
};

export default Carousel;
