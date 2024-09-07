"use client";
import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { colors, padding } from '../theme';

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  color: white;
  background-color: ${colors.secondary};
  padding:${padding.horizontalPadding};
`;

export default function Contact() {
  return (
    <>
      <FormSection id="contact-moi">
        <h2>CONTACTE-MOI</h2>
        <ContactForm />
      </FormSection>
    </>
  );
}
