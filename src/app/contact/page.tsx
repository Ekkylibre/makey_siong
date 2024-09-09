"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Importer le composant Image
import ContactForm from '../components/ContactForm';
import { colors, fonts, padding } from '../theme';

// Composant principal qui occupe toute la hauteur de la vue
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Hauteur de 100% de la vue */
  overflow: hidden; /* Empêche le défilement si le contenu dépasse */
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajuste la hauteur selon tes besoins */
  background-color: ${colors.secondary};
  color: white;
  padding: 10em; /* Réduit le padding pour mieux ajuster la mise en page */
`;

const BannerTitle = styled.h1`
  font-size: 2.5em; /* Ajuste la taille de la police selon tes besoins */
  margin-top: 2em;
  font-family: ${fonts.secondary};
`;

const BannerSubtitle = styled.a`
  font-size: 1.2em; /* Ajuste la taille de la police selon tes besoins */
  margin: 0.5em 0 0;
  color: #f0f0f0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex: 1; /* Permet à cette section de prendre l'espace restant */
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  color: white;
  background-color: ${colors.secondary};
  padding: ${padding.horizontalPadding};
`;

const FormContainer = styled.div`
  flex: 1;
  position: relative; /* Pour que le z-index fonctionne */
  z-index: 10;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%; /* Assure-toi que le conteneur a une hauteur définie */
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.h2`
  font-size: 2em; /* Ajuste la taille de la police selon tes besoins */
  color: white;
  margin-bottom: 1em;
  font-family: ${fonts.secondary};
`;

export default function Contact() {
  return (
    <ContactContainer>
      <Banner>
        <BannerTitle>CRÉONS ENSEMBLE</BannerTitle>
        <BannerSubtitle href="mailto:mk.vision@hotmail.com">mk.vision@hotmail.com</BannerSubtitle>
      </Banner>
      <FormSection id="contact-moi">
        <FormContainer>
          <SectionHeader>CONTACTE - MOI</SectionHeader>
          <ContactForm />
        </FormContainer>
        <ImageContainer>
          <Image
            src="/contact.jpg"
            alt="Contact"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority // Ajoute la prop priority
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
      </FormSection>
    </ContactContainer>
  );
}
