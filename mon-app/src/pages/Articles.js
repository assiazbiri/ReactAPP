import { articles } from './data';

function Articles() {
  return (
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
  );
}

export default Articles;
