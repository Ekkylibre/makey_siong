import React from "react";
import PageTemplate from "../../components/LegalTemplate";

const LegalNotice = () => {
  const sections = [
    { title: "1. Informations Éditeur", content: "Nom de l’entreprise : [Nom de l’entreprise] <br /> Adresse : [Adresse complète] <br /> Téléphone : [Numéro de téléphone] <br /> Email : [Adresse e-mail] <br /> Directeur de la publication : [Nom du directeur]" },
    { title: "2. Hébergeur du Site", content: "Hébergeur : [Nom de l’hébergeur] <br /> Adresse : [Adresse complète de l’hébergeur] <br /> Téléphone : [Numéro de téléphone de l’hébergeur]" },
    { title: "3. Propriété Intellectuelle", content: "Le contenu de ce site, y compris les textes, images, et vidéos, est la propriété exclusive de [Nom de l’entreprise] et est protégé par les lois sur la propriété intellectuelle." },
    { title: "4. Responsabilité", content: "[Nom de l’entreprise] ne peut être tenu responsable des erreurs ou omissions sur le site, ni des dommages directs ou indirects résultant de son utilisation." }
  ];

  return <PageTemplate pageTitle="Mentions Légales" sections={sections} />;
};

export default LegalNotice;
