import styled, { keyframes } from 'styled-components';

// Définir l'animation de montée
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 2rem;
  max-width: 1200px;
  width: 90%;
  animation: ${slideUp} 0.3s ease-out;
  text-align: left; /* Align text to the left */
`;

const ModalBody = styled.div`
  margin-bottom: 1rem;
  color: black;
  text-align: left; /* Align text to the left */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 0;
  margin: 0;
  line-height: 1;
`;

type ModalProps = {
  content: React.ReactNode;
  onClose: () => void;
};

export function Modal({ content, onClose }: ModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
