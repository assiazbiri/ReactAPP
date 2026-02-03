import { useEffect, useState } from 'react';
import './App.css';
import Articles from './pages/Articles';
import Association from './pages/Association';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';

const pageTitles = {
  accueil: 'Accueil',
  evenements: 'Événements',
  articles: 'Articles',
  association: 'Association',
  contact: 'Contact',
};

const pageComponents = {
  accueil: Home,
  evenements: Events,
  articles: Articles,
  association: Association,
  contact: Contact,
};

const getHashPage = () => {
  const hash = window.location.hash.replace('#', '');
  return pageTitles[hash] ? hash : 'accueil';
};

function App() {
  const [page, setPage] = useState(getHashPage);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getHashPage());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const PageComponent = pageComponents[page] ?? Home;

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <span className="logo">VSMF</span>
          <div className="nav-links">
            {Object.entries(pageTitles).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className={`nav-button ${page === key ? 'active' : ''}`}
                aria-current={page === key ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
        <div className="hero-content">
          <p className="tagline">Association VSMF</p>
          <h1>Valoriser les savoirs, mémoires & familles</h1>
          <p>
            VSMF accompagne les initiatives culturelles et solidaires qui renforcent le lien social.
            Retrouvez nos événements, articles et projets engagés.
          </p>
          <div className="hero-actions">
            <button className="primary" type="button">
              Participer
            </button>
            <button className="ghost" type="button">
              Devenir bénévole
            </button>
          </div>
        </div>
      </header>

      <main>
        <PageComponent />
      </main>

      <footer className="footer">
        <div>
          <h3>Contactez-nous</h3>
          <p>contact@vsmf-association.org</p>
          <p>01 84 00 00 00</p>
        </div>
        <div>
          <h3>Adresse</h3>
          <p>12 rue des Arts, 75010 Paris</p>
          <p>Du lundi au vendredi · 9h - 18h</p>
        </div>
        <div>
          <h3>Suivez-nous</h3>
          <div className="socials">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
