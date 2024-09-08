// src/components/Carousel.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import Image from 'next/image';
import achievementsData from '../data/achievements.json';

interface CarouselProps {
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
`;

const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  ${props => props.left ? 'left: 70px;' : 'right: 70px;'}
  background: transparent;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
  font-size: 100px;
  border: none;
  outline: none;
`;

const getYouTubeEmbedURL = (url: string) => {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const Carousel: React.FC<CarouselProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievementsData.achievements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === achievementsData.achievements.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <VideoModal>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ArrowButton left onClick={handlePrev}>‹</ArrowButton>
      <VideoIframe
        src={getYouTubeEmbedURL(achievementsData.achievements[currentIndex].url)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <ArrowButton onClick={handleNext}>›</ArrowButton>
    </VideoModal>
  );
};

export default Carousel;
