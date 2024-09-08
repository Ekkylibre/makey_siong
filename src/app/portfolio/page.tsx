// src/app/portfolio/page.tsx
"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import Image from 'next/image';
import achievementsData from '../data/achievements.json';
import Carousel from '../components/Carrousel';

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  height: 100px;
  background-color: ${colors.secondary};
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  
  &:hover .main-overlay {
    opacity: 1;
  }

  &:hover .main-title {
    opacity: 1;
  }

  cursor: pointer;
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

  cursor: pointer;
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
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
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const MainOverlay = styled(Overlay)``;

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleThumbnailClick = (url: string) => {
    setSelectedVideo(url);
  };

  const handleMainImageClick = () => {
    setSelectedVideo(achievementsData.achievements[0].url);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <PortfolioContainer>
      <AchievementsList>
        <Spacer />
        <MainImageContainer onClick={handleMainImageClick}>
          <MainImage>
            <Image 
              src={achievementsData.achievements[0].imageSrc}
              alt={achievementsData.achievements[0].title}
              layout="fill"
              objectFit="cover"
            />
          </MainImage>
          <MainOverlay className="main-overlay" />
          <MainTitle className="main-title">{achievementsData.achievements[0].title}</MainTitle>
        </MainImageContainer>
        <Spacer />
        <ThumbnailContainer>
          {achievementsData.achievements.slice(1).map((achievement) => (
            <ThumbnailCard key={achievement.id} onClick={() => handleThumbnailClick(achievement.url)}>
              <ThumbnailImage
                src={achievement.imageSrc}
                alt={achievement.title}
                layout="responsive"
                width={1000}
                height={600}
              />
              <Overlay className="thumbnail-overlay" />
              <ThumbnailTitle className="thumbnail-title">{achievement.title}</ThumbnailTitle>
            </ThumbnailCard>
          ))}
        </ThumbnailContainer>
      </AchievementsList>

      {/* Affiche le modal de vidéo si une vidéo est sélectionnée */}
      {selectedVideo && (
        <Carousel onClose={handleCloseModal} />
      )}
    </PortfolioContainer>
  );
}
