import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme';

// Styles pour le formulaire
const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  background-color: ${colors.primary};
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
  background-color: ${colors.primary}; /* Couleur de fond initiale */
  color: white; /* Couleur du texte */
  border: 1px solid white; /* Bordure bleue */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.3s, color 0.3s; /* Transition pour l'effet de luminosité */
  
  /* Applique un léger effet de luminosité */
  &:hover {
    filter: brightness(1.3); /* Augmente la luminosité de 30% au survol */
    color: white; /* Change la couleur du texte au survol */
  }
`;

const ConsentField = styled.div`
  display: flex;
  align-items: flex-start; /* Aligne la case à cocher et le texte au début du conteneur */
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-top: 5px; /* Aligne verticalement la case à cocher avec la première ligne du texte */
  margin-right: 10px; /* Espace entre la case à cocher et le texte */
  cursor: pointer;
`;

const ConsentLabel = styled.label`
  display: inline-block; /* Assure que le texte est traité comme un bloc en ligne */
  font-weight: normal; /* Style du texte du label */
  line-height: 1.5; /* Hauteur de ligne pour le texte multi-lignes */
  cursor: pointer;
`;

const ConsentLink = styled.a`
  color: white; /* Couleur du texte du lien */
  text-decoration: underline; /* Sous-ligne le texte du lien */
  
  &:hover {
    color: #007bff; /* Change la couleur du texte au survol si vous le souhaitez */
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    consent: false
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, type, checked, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.consent) {
      alert('Vous devez accepter notre politique de confidentialité pour soumettre le formulaire.');
      return;
    }
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
        <ConsentField>
          <Checkbox
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <ConsentLabel htmlFor="consent">
            J’accepte que mes données personnelles soient collectées et utilisées conformément à la <ConsentLink href="/politique-de-confidentialite">politique de confidentialité</ConsentLink>.
          </ConsentLabel>
        </ConsentField>
        <SubmitButtonWrapper>
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </SubmitButtonWrapper>
      </form>
    </FormContainer>
  );
}

export default ContactForm;
