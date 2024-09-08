"use client";
import styled from 'styled-components';
import Link from 'next/link';

const SocialTestContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
`;

const SocialList = styled.ul`
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.4); /* Couleur de bordure blanche avec opacité */
  cursor: pointer;
  transition: ease 0.3s;
  font-size: 1.5rem;
  margin: 0 5px;
  opacity: 0.7; /* Assure que toutes les icônes ont une opacité normale par défaut */
  
  a {
    color: inherit; /* Assure que la couleur du lien est héritée de l'élément parent */
    text-decoration: none; /* Enlève le soulignement du lien */
  }

  i {
    color: #ffffff; /* Définit la couleur des icônes en blanc */
    line-height: 50px;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1); /* Bordure blanche au survol */
    opacity: 1; /* Assure que l'icône survolée est bien visible */
  }
`;

const SocialContainer = styled.div`
  display: inline-block; /* Limite la portée du hover à ce conteneur spécifique */
  
  &:hover ${SocialItem}:not(:hover) {
    opacity: 0.3; 
  }
`;

export default function SocialTest() {
  return (
    <SocialTestContainer>
      <SocialContainer>
        <SocialList>
          <SocialItem>
            <Link href="https://www.facebook.com/..." target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </Link>
          </SocialItem>
          <SocialItem>
            <Link href="https://www.linkedin.com/in/..." target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </Link>
          </SocialItem>
          <SocialItem>
            <Link href="https://www.instagram.com/..." target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
          </SocialItem>
          <SocialItem>
            <Link href="https://www.youtube.com/..." target="_blank" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </Link>
          </SocialItem>
          <SocialItem>
            <Link href="https://www.tiktok.com/..." target="_blank" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </Link>
          </SocialItem>
        </SocialList>
      </SocialContainer>
    </SocialTestContainer>
  );
}
