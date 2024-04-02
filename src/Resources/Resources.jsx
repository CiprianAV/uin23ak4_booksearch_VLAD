import React from 'react';
import resources from './Resources'; // Pass på at denne stien er korrekt for din prosjektstruktur

const Resources = ({ category }) => {
  const categoryResources = resources.filter(resource => resource.category === category);

  return (
    <div>
      <h2>{category.toUpperCase()} Ressurser</h2>
      <ul>
        {categoryResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;