import styled from 'styled-components';

// Styles du Modal
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
  position: relative; /* Nécessaire pour que le CloseButton soit positionné correctement */
  background-color: white;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalBody = styled.div`
  margin-bottom: 1rem;
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

// Définition du type pour les props du Modal
type ModalProps = {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
};

export function Modal({ title, content, onClose }: ModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
