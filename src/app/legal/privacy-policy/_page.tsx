import React from "react";
import PageTemplate from "../../components/LegalTemplate";

const PrivacyPolicy = () => {
  const sections = [
    { title: "1. Informations Collectées", content: "Nous collectons les informations suivantes : nom, prénom, et adresse e-mail lorsque vous remplissez notre formulaire de contact." },
    { title: "2. Utilisation des Informations", content: "Les informations collectées sont utilisées uniquement pour vous contacter et répondre à vos demandes. Nous ne partageons pas vos informations avec des tiers sans votre consentement." },
    { title: "3. Sécurité des Données", content: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre toute utilisation non autorisée ou divulgation." },
    { title: "4. Vos Droits", content: "Vous avez le droit de demander l’accès, la rectification ou la suppression de vos données personnelles. Pour ce faire, veuillez nous contacter via le formulaire de contact sur notre site." },
    { title: "5. Modifications de la Politique", content: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page." },
    { title: "Contact", content: "Pour toute question concernant notre politique de confidentialité, veuillez nous contacter via notre formulaire de contact." }
  ];

  return <PageTemplate pageTitle="Politique de Confidentialité" sections={sections} />;
};

export default PrivacyPolicy;
