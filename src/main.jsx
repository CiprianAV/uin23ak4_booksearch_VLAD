import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  /*
  function App() {
    return (
      <Router>
        <div>
          <Route path="/html">
          <Resources category="HTML" />
        </Route>
        <Route path="/css">
          <Resources category="CSS" />
        </Route>
        <Route path="/javascript">
          <Resources category="JavaScript" />
        </Route>
        <Route path="/react">
          <Resources category="React" />
        </Route>
        <Route path="/sanity">
          <Resources category="Sanity and headless CMS" />
        </Route>
        </div>
      </Router>
    );
  }*/
)
