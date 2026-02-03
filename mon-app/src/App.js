import { useState } from 'react';
import './App.css';

const events = [
  {
    title: 'Journée Culture & Partage',
    date: '12 avril 2024',
    location: 'Maison des Associations, Paris',
    description:
      'Ateliers intergénérationnels, stand créatif et rencontres autour de la mémoire locale.',
  },
  {
    title: 'Expo Photo "Vies & Mémoire"',
    date: '27 avril 2024',
    location: 'Galerie VSMF',
    description:
      'Regards d’artistes sur les parcours de vie, accompagnés de médiations culturelles.',
  },
  {
    title: 'Forum des Initiatives Solidaires',
    date: '8 mai 2024',
    location: 'Place République',
    description:
      'Rencontres avec nos partenaires, inscriptions aux actions de bénévolat et animations.',
  },
];

const articles = [
  {
    title: 'Pourquoi la mémoire culturelle compte',
    date: '5 mars 2024',
    excerpt:
      'La transmission des récits locaux renforce les liens sociaux et inspire les nouvelles générations.',
  },
  {
    title: 'Nos ateliers créatifs en images',
    date: '18 février 2024',
    excerpt:
      'Retour sur les ateliers d’expression artistique menés avec nos bénévoles et partenaires.',
  },
  {
    title: 'Bilan 2023 : des actions concrètes',
    date: '25 janvier 2024',
    excerpt:
      'Plus de 25 événements organisés, 600 participants et une communauté toujours plus engagée.',
  },
];

const team = [
  {
    name: 'Amina Diallo',
    role: 'Présidente',
    focus: 'Transmission & mémoire locale',
  },
  {
    name: 'Julien Martin',
    role: 'Coordinateur',
    focus: 'Événements culturels',
  },
  {
    name: 'Sara Benali',
    role: 'Chargée de communication',
    focus: 'Articles & partenariats',
  },
];

const pageTitles = {
  accueil: 'Accueil',
  evenements: 'Événements',
  articles: 'Articles',
  association: 'Association',
  contact: 'Contact',
};

function App() {
  const [page, setPage] = useState('accueil');

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <span className="logo">VSMF</span>
          <div className="nav-links">
            {Object.entries(pageTitles).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setPage(key)}
                className={`nav-button ${page === key ? 'active' : ''}`}
              >
                {label}
              </button>
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
        {page === 'accueil' && (
          <>
            <section className="section">
              <div className="section-header">
                <h2>Nos événements à venir</h2>
                <p>Rencontrez l’association et participez à nos rendez-vous culturels.</p>
              </div>
              <div className="card-grid">
                {events.map((event) => (
                  <article key={event.title} className="card">
                    <div className="card-meta">
                      <span>{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section alt">
              <div className="section-header">
                <h2>Articles & actualités</h2>
                <p>Nos publications racontent les actions de terrain et les histoires locales.</p>
              </div>
              <div className="card-grid">
                {articles.map((article) => (
                  <article key={article.title} className="card">
                    <div className="card-meta">
                      <span>{article.date}</span>
                      <span>Lecture 4 min</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <button className="text-button" type="button">
                      Lire l’article
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="about">
                <div>
                  <h2>À propos de VSMF</h2>
                  <p>
                    Nous créons des espaces de rencontre pour valoriser les mémoires familiales, les
                    parcours de vie et les expressions artistiques. Nos actions s’appuient sur un réseau
                    de bénévoles, d’artistes et de partenaires locaux.
                  </p>
                  <ul>
                    <li>Accompagnement culturel et social</li>
                    <li>Programmes intergénérationnels</li>
                    <li>Production d’articles et de contenus</li>
                  </ul>
                </div>
                <div className="stats">
                  <div>
                    <span>25+</span>
                    <p>Événements par an</p>
                  </div>
                  <div>
                    <span>600</span>
                    <p>Participants engagés</p>
                  </div>
                  <div>
                    <span>40</span>
                    <p>Bénévoles actifs</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {page === 'evenements' && (
          <section className="section">
            <div className="section-header">
              <h2>Calendrier des événements</h2>
              <p>Découvrez nos événements culturels, ateliers et forums solidaires.</p>
            </div>
            <div className="card-grid">
              {events.map((event) => (
                <article key={event.title} className="card">
                  <div className="card-meta">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="text-button" type="button">
                    Réserver une place
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'articles' && (
          <section className="section alt">
            <div className="section-header">
              <h2>Nos articles</h2>
              <p>Des récits, interviews et reportages sur nos actions locales.</p>
            </div>
            <div className="card-grid">
              {articles.map((article) => (
                <article key={article.title} className="card">
                  <div className="card-meta">
                    <span>{article.date}</span>
                    <span>Lecture 4 min</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <button className="text-button" type="button">
                    Lire l’article
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'association' && (
          <section className="section">
            <div className="section-header">
              <h2>Notre association</h2>
              <p>
                VSMF agit pour valoriser les mémoires familiales et stimuler la création artistique
                locale.
              </p>
            </div>
            <div className="about">
              <div>
                <h3>Notre mission</h3>
                <p>
                  Nous rassemblons habitants, artistes et partenaires autour d’initiatives qui donnent
                  la parole aux récits de vie. Nos ateliers et événements participatifs nourrissent une
                  culture de solidarité et de transmission.
                </p>
                <div className="pill-row">
                  <span className="pill">Mémoire & patrimoine</span>
                  <span className="pill">Lien social</span>
                  <span className="pill">Création artistique</span>
                </div>
              </div>
              <div className="stats">
                {team.map((member) => (
                  <div key={member.name} className="member">
                    <span>{member.name}</span>
                    <p>{member.role}</p>
                    <small>{member.focus}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === 'contact' && (
          <section className="section alt">
            <div className="section-header">
              <h2>Contact & adhésion</h2>
              <p>Écrivez-nous pour rejoindre l’association, proposer un projet ou collaborer.</p>
            </div>
            <div className="contact-grid">
              <div className="card">
                <h3>Nous écrire</h3>
                <p>contact@vsmf-association.org</p>
                <p>01 84 00 00 00</p>
                <button className="primary" type="button">
                  Envoyer un message
                </button>
              </div>
              <div className="card">
                <h3>Venir nous voir</h3>
                <p>12 rue des Arts, 75010 Paris</p>
                <p>Du lundi au vendredi · 9h - 18h</p>
                <button className="ghost" type="button">
                  Itinéraire
                </button>
              </div>
              <div className="card">
                <h3>Nos réseaux</h3>
                <div className="socials">
                  <span>Instagram</span>
                  <span>Facebook</span>
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
          </section>
        )}
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
