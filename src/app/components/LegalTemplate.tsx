import React from "react";

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
    <>
      <h1>{pageTitle}</h1>
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </>
  );
};

export default LegalTemplate;
