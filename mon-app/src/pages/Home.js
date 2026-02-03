import { articles, events } from './data';

function Home() {
  return (
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
  );
}

export default Home;
