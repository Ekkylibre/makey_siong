"use client";
import styled from 'styled-components';
import SocialTest from './SocialTest';
import { colors } from '../../../theme';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: ${colors.primary}; 
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledHr = styled.hr`
  width: 90%;
  border-top: 1px solid #666;
  margin: 1rem auto;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: white;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
    return (
        <FooterContainer>
          <SocialTest />
            <StyledHr />
            <FooterContent>
                <FooterLinks>
                    <FooterLink href="/politique-de-confidentialite">Politique de Confidentialité</FooterLink>
                    <FooterLink href="/mentions-legales">Mentions Légales</FooterLink>
                    <FooterLink href="/consentement-collecte-donnees">Consentement pour la Collecte de Données</FooterLink>
                </FooterLinks>
                <Copyright>© {new Date().getFullYear()} Dany XIONG. Tous droits réservés.</Copyright>
            </FooterContent>
        </FooterContainer>
    );
}
