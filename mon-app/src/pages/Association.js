import { team } from './data';

function Association() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Notre association</h2>
        <p>
          VSMF agit pour valoriser les mémoires familiales et stimuler la création artistique locale.
        </p>
      </div>
      <div className="about">
        <div>
          <h3>Notre mission</h3>
          <p>
            Nous rassemblons habitants, artistes et partenaires autour d’initiatives qui donnent la
            parole aux récits de vie. Nos ateliers et événements participatifs nourrissent une culture
            de solidarité et de transmission.
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
  );
}

export default Association;
