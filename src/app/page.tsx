"use client";
import styled from 'styled-components';
import Card from './components/Card';
import { colors, fonts, padding } from './theme';
import services from './data/services.json';

// Style pour le fond et la vidéo
const StyledBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  h1, h2 {
    color: white;
    z-index: 1;
  }

  h2 {
    margin-top: 0.5em;
  }

  p {
    font-family: ${fonts.secondary};
    font-size: 1.5em;
    color: white;
    z-index: 1;
    margin-top: 0.5em;
  }
`;

// Style pour la section des services
const ServicesSection = styled.section`
  padding: 2em;
  background-color: #f4f4f4;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  background-color: ${colors.secondary};
  padding:${padding.horizontalPadding};

  h1 {
    margin: 0;
    font-size: 2em;
  }

  .cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
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
        <video autoPlay loop muted>
          <source src="/demo76mo.mp4" type="video/mp4" />
        </video>
      </StyledBackground>
      <ServicesSection id="services">
        <h2>SERVICES</h2>
        <div className="cards-container">
          {services.cards.map((service, index) => (
            <Card
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              url={service.url}
            />
          ))}
        </div>
      </ServicesSection>
    </>
  );
}
