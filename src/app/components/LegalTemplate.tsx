"use client";
import styled from "styled-components";
import { colors } from "../theme";

type PageSection = {
  title: string;
  content: string | JSX.Element;
};

type PageProps = {
  pageTitle: string;
  sections: PageSection[];
};

const LegalTemplate: React.FC<PageProps> = ({ pageTitle, sections }) => {
  return (
    <Container>
      <Title>{pageTitle}</Title>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionTitle>{section.title}</SectionTitle>
          <Content>{section.content}</Content>
        </Section>
      ))}
    </Container>
  );
};

export default LegalTemplate;

// Styled components
const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

const Section = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;

  &::before {
    content: "";
    width: 40px;
    height: 4px;
    background-color: ${colors.primary};
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  text-align: justify;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;
