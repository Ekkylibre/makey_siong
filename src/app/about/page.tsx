"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { colors, padding } from '../theme';
import ButtonLink from '../components/ButtonLink';

// Animation pour révéler le texte
const reveal = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

// Animation pour faire apparaître le texte en montant
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BackgroundContainer = styled.div`
  background-color: ${colors.secondary};
  height: 100%;
  width: 100%;
  padding: ${padding.horizontalPadding};
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  padding-top: 100px;
  gap: 100px;
`;

const PhotoColumn = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25%;
  animation: ${slideUp} 1s ease forwards;
  color: white;
  position: relative;

  h1 {
    font-size: 5rem;
    margin-bottom: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transform: translateX(-60%);

    span {
      display: block;
      animation: ${reveal} 1.5s ease forwards;
    }
  }

  p {
    font-size: 1.5rem;
    animation: ${slideUp} 1s ease forwards;
    padding-bottom: 50px;
  }
`;

export default function About() {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <PhotoColumn>
          <Image
            src="/profile.jpg"
            alt="Photo de profil"
            width={500}
            height={700}
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </PhotoColumn>
        <TextColumn>
          <h1>
            <span>MAKEY</span>
            <span>SIONG</span>
          </h1>
          <p>
            Passionné de vidéo depuis 2015, puis en 2021, j’ai décidé d’en faire mon métier et me spécialiser
            dans le domaine de la communication visuelle.
            <br /><br />
            J’ai développé un perfectionnisme pour répondre aux projets, des plus simples aux plus challengeants.
            Je suis constamment en apprentissage, car je veux toujours être meilleur qu’hier.
            <br /><br />
            Chaque projet est unique. Par mon expertise, je m’engage à répondre à vos demandes
            et ainsi développer au mieux votre marque et votre présence sur internet.
          </p>
          <ButtonLink
            href="/contact"
            bgColor={colors.secondary}
          >
            Contactez-moi
          </ButtonLink>
          <a
            href="https://www.youtube.com/watch?v=GbA9Eb1D6qU&t=157s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/signature_blanc.png"
              alt="signature"
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </a>
        </TextColumn>
      </ContentContainer>
    </BackgroundContainer>
  );
}
