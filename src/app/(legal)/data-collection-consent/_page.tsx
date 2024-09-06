import React from "react";
import PageTemplate from "../../components/LegalTemplate";

const DataCollectionConsent = () => {
  const sections = [
    { title: "1. Collecte de Données", content: "Les données collectées incluent votre nom, prénom, et adresse e-mail. Ces données sont collectées pour nous permettre de répondre à vos demandes et de vous contacter." },
    { title: "2. Utilisation des Données", content: "Les données que vous fournissez seront utilisées exclusivement pour les fins mentionnées dans notre politique de confidentialité." },
    { title: "3. Consentement", content: "En soumettant vos informations via notre formulaire, vous acceptez notre politique de confidentialité et donnez votre consentement à la collecte et à l’utilisation de vos données personnelles comme décrit." },
    { title: "4. Retrait du Consentement", content: "Vous pouvez retirer votre consentement à tout moment en nous contactant via notre formulaire de contact. Le retrait de votre consentement n’affectera pas la légalité des traitements effectués avant ce retrait." },
    { title: "Contact", content: "Pour toute question concernant la collecte de données, veuillez nous contacter via notre formulaire de contact." }
  ];

  return <PageTemplate pageTitle="Consentement pour la Collecte de Données" sections={sections} />;
};

export default DataCollectionConsent;
