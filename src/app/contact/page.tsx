"use client";
import styled, { keyframes } from 'styled-components';
import ContactForm from '../components/ContactForm';

// Animation pour révéler le texte du bas vers le haut
const reveal = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

// Animation pour faire apparaître le texte du bas vers le haut
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
  background-image: url('/profile.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const TextContent = styled.div`
  font-size: 20px;
  max-width: 600px;
  margin-left: 150px;
  color: white;
  text-align: left;

  h1 {
    margin-bottom: 50px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    animation: ${reveal} 0.5s ease-out forwards;
  }

  p {
    margin-bottom: 20px;
    opacity: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1); /* Ombre pour p */
    transform: translateY(20px);
    animation: ${slideUp} 1s ease-out forwards;
    
    &:nth-of-type(1) {
      animation-delay: 0.3s;
    }

    &:nth-of-type(2) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.9s;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    &:first-of-type::before {
      content: '“';
      font-size: 2.5em;
      margin-right: 0.2em;
      vertical-align: middle;
    }

    &:last-of-type::after {
      content: '”';
      font-size: 2.5em;
      margin-left: 0.2em;
      vertical-align: middle;
    }
  }
`;

const FormSection = styled.section`
  color: white;
  background-color: #081319; /* Ajout de la couleur de fond */
  padding-bottom: 20px;
`;

const CenteredH2 = styled.h2`
  text-align: center;
  color: white;
  padding: 20px 0;
`;

export default function Contact() {
    return (
        <>
            <BackgroundContainer>
                <TextContent>
                    <h1>Makey Siong</h1>
                    <p>
                        En tant que filmmaker passionné, je m’efforce de capturer les émotions et les histoires à travers la lentille de ma caméra. Mon travail est une exploration constante de la créativité et de l’authenticité, où chaque projet devient une aventure unique.
                    </p>
                    <p>
                        Mon approche est centrée sur la collaboration étroite avec mes clients pour comprendre leurs visions et transformer leurs idées en images captivantes. Que ce soit pour des courts-métrages, des documentaires ou des vidéos promotionnelles, je mets tout en œuvre pour livrer un produit final qui dépasse les attentes.
                    </p>
                    <p>
                        Je suis toujours à la recherche de nouveaux défis et de projets intéressants. N’hésitez pas à me contacter pour discuter de la manière dont nous pouvons travailler ensemble pour créer quelque chose de mémorable.
                    </p>
                </TextContent>
            </BackgroundContainer>
            <FormSection id="contact-moi">
              <CenteredH2>CONTACT-MOI</CenteredH2>
                  <ContactForm />
            </FormSection>
        </>
    );
}
