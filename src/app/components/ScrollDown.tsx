import React from 'react';
import styled, { keyframes } from 'styled-components';

// Définition de l'animation
const fadeMoveDown = keyframes`
  0%   { transform: translate(0, -20px) rotate(45deg); opacity: 0; }
  50%  { opacity: 1; }
  100% { transform: translate(0, 20px) rotate(45deg); opacity: 0; }
`;

// Création du composant stylé
const ScrollDownDiv = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px; /* Ajuster l'espace en bas pour correspondre à la taille agrandie */
  display: block;
  text-align: center;
  font-size: 40px; /* Augmenter la taille du texte */
  text-decoration: none;
  width: 26px; /* Augmenter la largeur */
  height: 26px; /* Augmenter la hauteur */
  border-bottom: 2px solid #fff; /* Augmenter l'épaisseur de la bordure */
  border-right: 2px solid #fff; /* Augmenter l'épaisseur de la bordure */
  transform: translate(-50%, 0%) rotate(45deg);
  animation: ${fadeMoveDown} 2s ease infinite;
`;

export default function ScrollDown() {
  return (
    <ScrollDownDiv />
  );
}
