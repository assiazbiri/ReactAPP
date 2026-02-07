import { events } from './data';

function Events() {
  return (
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
  );
}

export default Events;
