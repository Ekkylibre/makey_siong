"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactCompareSlider } from 'react-compare-slider';
import { colors, fonts, padding } from '../theme';
import Image from 'next/image';
import achievementsData from '../data/achievements.json';
import Carousel from '../components/Carousel';

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
  position: relative;
  
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

/* Ajout d'une section pour aligner le texte et la vidéo */
const CompareSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: ${padding.horizontalPadding};
  background-color: ${colors.secondary};
  gap: 20px;
`;

const TextWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-family: ${fonts.secondary};
  }
`;

const CompareSliderWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleThumbnailClick = (url: string) => {
    setSelectedVideo(url);
  };

  const handleMainImageClick = (url: string) => {
    setSelectedVideo(url);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <PortfolioContainer>
      <AchievementsList>
        <Spacer />
        <MainImageContainer onClick={() => handleMainImageClick(achievementsData.achievements[0].url)}>
          <MainImage>
            <Image
              src={achievementsData.achievements[0].imageSrc}
              alt={achievementsData.achievements[0].title}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              priority
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
                width={1000}
                height={600}
              />
              <Overlay className="thumbnail-overlay" />
              <ThumbnailTitle className="thumbnail-title">{achievement.title}</ThumbnailTitle>
            </ThumbnailCard>
          ))}
        </ThumbnailContainer>

        {/* Section pour le titre et le comparateur vidéo */}
        <CompareSection>
          <TextWrapper>
            <h1>Comparaison Vidéo</h1>
            <p>Voici une comparaison entre deux versions de la vidéo avant et après les modifications. Faites glisser la barre pour voir les différences.</p>
          </TextWrapper>
          <CompareSliderWrapper>
            <ReactCompareSlider
              itemOne={
                <video
                  src="/before.mp4"
                  autoPlay
                  loop
                  muted
                  style={{ width: '100%', height: '100%' }}
                />
              }
              itemTwo={
                <video
                  src="/after.mp4"
                  autoPlay
                  loop
                  muted
                  style={{ width: '100%', height: '100%' }}
                />
              }
            />
          </CompareSliderWrapper>
        </CompareSection>

      </AchievementsList>

      {/* Affiche le modal de vidéo si une vidéo est sélectionnée */}
      {selectedVideo && (
        <Carousel onClose={handleCloseModal} selectedVideo={selectedVideo} />
      )}
    </PortfolioContainer>
  );
}
