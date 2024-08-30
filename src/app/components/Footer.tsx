"use client";
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Copyright>© {new Date().getFullYear()} Dany XIONG. Tous droits réservés.</Copyright>
            </FooterContent>
        </FooterContainer>
    );
}
