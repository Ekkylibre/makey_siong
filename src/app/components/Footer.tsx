"use client";
import styled from 'styled-components';
import SocialTest from './SocialTest';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #0e232d; 
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

export default function Footer() {
    return (
        <FooterContainer>
          <SocialTest />
            <StyledHr />
            <FooterContent>
                <Copyright>© {new Date().getFullYear()} Dany XIONG. Tous droits réservés.</Copyright>
            </FooterContent>
        </FooterContainer>
    );
}
