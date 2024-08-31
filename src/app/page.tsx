"use client";
import styled from 'styled-components';

// Définissez le composant StyledBackground avec les styles pour la vidéo en fond
const StyledBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center; // Centre horizontalement
  align-items: center; // Centre verticalement
  text-align: center; // Centre le texte à l'intérieur des éléments

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; // Assurez-vous que la vidéo est en arrière-plan
  }

  h1, h2 {
    color: white; // Couleur du texte pour le contraste
    z-index: 1; // Assurez-vous que le texte est au-dessus de la vidéo
  }

  h2 {
    margin-top: 0.5em; // Espacement entre le h1 et le h2
  }
`;

const ServicesSection = styled.section`
  padding: 2em;
  text-align: center;
  background-color: #f4f4f4;
  color: #333;

  h1 {
    margin: 0;
    font-size: 2em;
  }
`;

export default function Home() {
  return (
    <>
      <StyledBackground>
        <div>
          <h1>MAKEY SIONG</h1>
          <h2>RÉALISATEUR</h2>
        </div>
        <video autoPlay loop>
          <source src="/car.mp4" type="video/mp4" />
        </video>
      </StyledBackground>
      <ServicesSection id="services">
        <h1>Services</h1>
      </ServicesSection>
    </>
  );
}
