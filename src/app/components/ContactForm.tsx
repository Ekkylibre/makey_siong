import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { Modal } from './Modal'; // Assurez-vous que le composant Modal est importé correctement
import PrivacyPolicy from '../legal/privacy-policy/_page'; // Assurez-vous que le composant PrivacyPolicy est importé correctement

// Styles pour le formulaire (inchangés)
const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 15px;

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
  background-color: ${colors.secondary}; /* Couleur de fond initiale */
  color: white; /* Couleur du texte */
  border: 1px solid white; /* Bordure blanche */
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

const ConsentLink = styled.span`
  color: white; /* Couleur du texte du lien */
  text-decoration: underline; /* Sous-ligne le texte du lien */
  cursor: pointer; /* Change le curseur en main pour indiquer que c'est cliquable */
  
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

  const [modalOpen, setModalOpen] = useState(false);

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
    console.log('Form data submitted:', formData);
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputRow>
          <InputField>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="NOM"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="PRÉNOM"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputField>
        </InputRow>
        <FormField>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-MAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE"
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
            J’accepte que mes données personnelles soient collectées et utilisées conformément à la{' '}
            <ConsentLink onClick={openModal}>politique de confidentialité</ConsentLink>.
          </ConsentLabel>
        </ConsentField>
        <SubmitButtonWrapper>
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </SubmitButtonWrapper>
      </form>

      {modalOpen && (
        <Modal content={<PrivacyPolicy />} onClose={closeModal} />
      )}
    </FormContainer>
  );
}

export default ContactForm;
