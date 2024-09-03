"use client";
import styled from 'styled-components';
import SocialTest from './SocialTest';
import { colors } from '../theme';
import { Modal } from './Modal';
import { useState } from 'react';
import DataCollectionConsent from '../(legal)/data-collection-consent/page';
import LegalNotice from '../(legal)/legal-notice/page';
import PrivacyPolicy from '../(legal)/privacy-policy/page';

// Styles (inchangés)
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
  width: 80%;
  border-top: 1px solid #666;
  margin: 1rem auto;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: white;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: "|";
    margin-left: 0.5rem;
  }

  &:last-child::after {
    content: "";
  }
`;

// Définir le type pour l'état modalOpen
type ModalType = 'confidentialite' | 'mentions' | 'consentement' | null;

export default function Footer() {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);

  const openModal = (modalType: ModalType) => {
    setModalOpen(modalType);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <FooterContainer>
      <SocialTest />
      <StyledHr />
      <FooterContent>
        <FooterLinks>
          <FooterLink onClick={() => openModal('confidentialite')}>Politique de Confidentialité</FooterLink>
          <FooterLink onClick={() => openModal('mentions')}>Mentions Légales</FooterLink>
          <FooterLink onClick={() => openModal('consentement')}>Consentement pour la Collecte de Données</FooterLink>
        </FooterLinks>
        <Copyright>© {new Date().getFullYear()} Dany XIONG. Tous droits réservés.</Copyright>
      </FooterContent>

      {modalOpen === 'confidentialite' && (
        <Modal title="Politique de Confidentialité" content={<PrivacyPolicy />} onClose={closeModal} />
      )}
      {modalOpen === 'mentions' && (
        <Modal title="Mentions Légales" content={<LegalNotice />} onClose={closeModal} />
      )}
      {modalOpen === 'consentement' && (
        <Modal title="Consentement pour la Collecte de Données" content={<DataCollectionConsent />} onClose={closeModal} />
      )}
    </FooterContainer>
  );
}
