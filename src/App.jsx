import { useState } from 'react'
import './App.css'
import './styles/main.scss'

const TabMenu = ({ resources }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="tabs">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {resource.category}
          </div>
        ))}
      </div>
      <div className="tab-content-container">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? 'show' : ''}`}
          >
            <h2 style={{ color: '#2A324B' }}>{resource.category}</h2>
            <p className="tab-text" style={{ color: 'black' }}>{resource.text}</p>  
            <ul>
              {resource.sources.map((source, idx) => (
                <li key={idx}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const resources = [
    {
      category: "HTML",
      text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
      sources: [
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/html/"
        },
        {
          title: "HTML Living standard",
          url: "https://html.spec.whatwg.org/multipage/"
        },
        {
          title: "HTML.com Tutorials",
          url: "https://html.com/"
        },
      ]
    },
    {
      category: "CSS",
      text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
      sources: [
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/css/"
        },
        {
          title: "W3C HTML & CSS Standards",
          url: "https://www.w3.org/standards/webdesign/htmlcss.html"
        },
        {
          title: "W3C CSS Validator",
          url: "https://jigsaw.w3.org/css-validator/"
        },
        {
          title: "CSS Tricks",
          url: "https://css-tricks.com/"
        },
      ]
    },
    {
      category: "JavaScript",
      text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesitt.",
      sources: [
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/js/"
        },
        {
          title: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
          title: "How to read JavaScript Documentation",
          url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
        },
      ]
    },
    {
      category: "React",
      text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
      sources: [
        {
          title: "React documentation",
          url: "https://reactjs.org/docs/getting-started.html"
        },
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
        },
        {
          title: "How to read JavaScript Documentation",
          url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
        },
      ]
    },
    {
      category: "Sanity and headless CMS",
      text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
      sources: [
          {
              title: "Sanity documentation",
              url: "https://www.sanity.io/docs"
          },
          {
              title: "OnCrawl: a beginners guide to headless CMS",
              url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
          },
          {
              title: "Section.io: Getting started with Sanity CMS",
              url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
          },
        ]
      },
  ];

  return (
    <div>
      <h1>My React App</h1>
      <TabMenu resources={resources} />
    </div>
  );
}

export default App;
