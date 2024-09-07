"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Importer le composant Image
import ContactForm from '../components/ContactForm';
import { colors, padding } from '../theme';

// Composant Banner stylisé
const Banner = styled.div`
  display: flex;
  flex-direction: column; /* Change pour aligner les éléments verticalement */
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajuste la hauteur selon tes besoins */
  background-color: ${colors.tertiary}; /* Couleur de fond de la bannière */
  color: white;
  padding: 10em; /* Réduit le padding pour mieux ajuster la mise en page */
`;

const BannerTitle = styled.h1`
  font-size: 2.5em; /* Ajuste la taille de la police selon tes besoins */
  margin-top: 2em;
`;

const BannerSubtitle = styled.a`
  font-size: 1.2em; /* Ajuste la taille de la police selon tes besoins */
  margin: 0.5em 0 0; /* Marge au-dessus du texte */
  color: #f0f0f0; /* Couleur du texte, peut être modifiée */
  text-decoration: none; /* Enlève le soulignement par défaut des liens */
  &:hover {
    text-decoration: underline; /* Souligne le texte au survol pour indiquer qu'il est cliquable */
  }
`;

const FormSection = styled.section`
  display: flex;
  justify-content: space-between; /* Aligne les éléments horizontalement */
  align-items: center;
  gap: 2em;
  color: white;
  background-color: ${colors.tertiary};
  padding: ${padding.horizontalPadding};
`;

const FormContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Contact() {
  return (
    <>
      <Banner>
        <BannerTitle>CRÉONS ENSEMBLE</BannerTitle>
        <BannerSubtitle href="mailto:mk.vision@hotmail.com">mk.vision@hotmail.com</BannerSubtitle>
      </Banner>
      <FormSection id="contact-moi">
        <FormContainer>
          <ContactForm />
        </FormContainer>
        <ImageContainer>
          <Image src="/contact.jpg" alt="Contact" layout="responsive" width={500} height={500} />
        </ImageContainer>
      </FormSection>
    </>
  );
}
