function Contact() {
  return (
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
  );
}

export default Contact;
