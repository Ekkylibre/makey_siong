import React, { useState } from 'react';
import styled from 'styled-components';

// Styles pour le formulaire
const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  background-color: #0e232d;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    outline: none;
    box-shadow: none;
  }

  input {
    margin-bottom: 10px;
  }

  textarea {
    resize: vertical; /* Permet le redimensionnement vertical seulement */
    min-height: 150px; /* Définir une hauteur minimale pour le champ de texte */
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
`;

const InputField = styled(FormField)`
  flex: 1;
  &:first-of-type {
    margin-right: 10px;
  }
`;

const SubmitButtonWrapper = styled.div`
  text-align: center; /* Centre le bouton horizontalement */
  margin-top: 20px; /* Ajoute un espace au-dessus du bouton */
`;

const SubmitButton = styled.button`
  background-color: #0e232d; /* Couleur de fond initiale */
  color: white; /* Couleur du texte */
  border: 1px solid white; /* Bordure bleue */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.3s, color 0.3s; /* Transition pour l'effet de luminosité */
  
  /* Applique un léger effet de luminosité */
  &:hover {
    filter: brightness(1.3); /* Augmente la luminosité de 30% au survol */
    color: #007bff; /* Change la couleur du texte au survol */
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre le formulaire
    console.log('Form data submitted:', formData);
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputRow>
          <InputField>
            <label htmlFor="firstName">Nom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label htmlFor="lastName">Prénom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputField>
        </InputRow>
        <FormField>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButtonWrapper>
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </SubmitButtonWrapper>
      </form>
    </FormContainer>
  );
}

export default ContactForm;
