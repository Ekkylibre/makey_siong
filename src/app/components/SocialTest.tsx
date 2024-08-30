"use client";
import styled from 'styled-components';
import Link from 'next/link';

const SocialTestContainer = styled.div`
  display: table;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
`;

const SocialTestContent = styled.div`
  display: table-cell;
  vertical-align: middle;
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
  margin-left: 10px;
  margin-bottom: 20px;
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
    
    i {
      color: #ffffff; /* Couleur blanche au survol */
    }
  }
`;

const SocialContainer = styled.div`
  /* Réduit l'opacité des icônes non survolées lorsque le conteneur est survolé */
  &:hover ${SocialItem}:not(:hover) {
    opacity: 0.3; 
  }
`;

export default function SocialTest() {
  return (
    <SocialTestContainer>
      <SocialTestContent>
        <SocialContainer>
          <SocialList>
            <SocialItem>
              <Link href="https://www.facebook.com/people/Makey-Siong/pfbid018xF4ucqvhnGF1gVaZuoczCL6yGEsmLo6i1AzyVyEWYXcmvZQmmeQ8Gs7Fb48XWQl/?locale=fr_FR" target="_blank">
                <i className="fab fa-facebook" tabIndex={0}></i>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="https://www.linkedin.com/in/makey-siong-071924287" target="_blank">
                <i className="fab fa-linkedin" tabIndex={0}></i>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="https://www.instagram.com/mksg0411/" target="_blank">
                <i className="fab fa-instagram" tabIndex={0}></i>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="https://www.youtube.com/@makeysiong" target="_blank">
                <i className="fab fa-youtube" tabIndex={0}></i>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="https://www.tiktok.com/@makey_sg04" target="_blank">
                <i className="fab fa-tiktok" tabIndex={0}></i>
              </Link>
            </SocialItem>
          </SocialList>
        </SocialContainer>
      </SocialTestContent>
    </SocialTestContainer>
  );
}
