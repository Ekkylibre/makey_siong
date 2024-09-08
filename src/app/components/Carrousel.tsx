// src/components/Carousel.tsx
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

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

const Carousel: React.FC<CarouselProps> = ({ selectedVideo, onClose }) => {
  // Extract videoId from selectedVideo URL
  const embedURL = getYouTubeEmbedURL(selectedVideo);

  return (
    <VideoModal>
      <CloseButton onClick={onClose}>X</CloseButton>
      <VideoIframe
        src={embedURL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoModal>
  );
};

export default Carousel;
