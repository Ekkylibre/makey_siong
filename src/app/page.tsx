"use client";
import styled from 'styled-components';
import Card from './components/Card';

// Style pour le fond et la vidéo
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

  p {
    font-family: 'Bebas Neue', sans-serif; // Application de la police Bebas Neue
    font-size: 1.5em; // Taille de police ajustée selon votre design
    color: white; // Assurez-vous que le texte est bien visible sur la vidéo
    z-index: 1; // Assurez-vous que le texte est au-dessus de la vidéo
    margin-top: 0.5em; // Espacement par rapport au titre (h1)
  }
`;

// Style pour la section des services
const ServicesSection = styled.section`
  padding: 2em;
  background-color: #f4f4f4;
  color: white;
  display: flex;
  flex-direction: column; // Affiche les éléments en colonne
  align-items: center; // Centre les éléments horizontalement
  gap: 2em; // Espacement entre les cartes
  background-color: #081319;

  h1 {
    margin: 0;
    font-size: 2em;
  }

  // Style pour contenir les cartes dans une rangée
  .cards-container {
    display: flex;
    justify-content: center; // Centre les cartes horizontalement
    flex-wrap: wrap; // Permet aux cartes de se déplacer à la ligne suivante si nécessaire
    gap: 2em; // Espacement entre les cartes
  }
`;

export default function Home() {
  return (
    <>
      <StyledBackground>
        <div>
          <h1>MAKEY SIONG</h1>
          <p>RÉALISATEUR</p>
        </div>
        <video autoPlay loop>
          <source src="/demo76mo.mp4" type="video/mp4" />
        </video>
      </StyledBackground>
      <ServicesSection id="services">
        <h2>SERVICES</h2>
        <div className="cards-container">
          <Card
            imageSrc="/moto.jpg"
            title="Auto-Moto"
            description="Captation dynamique des véhicules pour des vidéos aussi rapides que fluides."
            url=""
          />
          <Card
            imageSrc="/corporate.jpg"
            title="Corporate"
            description="Création de vidéos corporate professionnelles pour valoriser votre marque."
            url=""
          />
          <Card
            imageSrc="/social_media.jpg"
            title="Réseaux Sociaux"
            description="Vidéos impactantes pour booster votre présence et engagement sur les réseaux sociaux."
            url=""
          />
        </div>
      </ServicesSection>
    </>
  );
}
