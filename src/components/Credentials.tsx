import { certificates, education, languages } from '../data/cv'
import Reveal from './Reveal'

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Credentials</span>
          <h2 className="section-title">Certificates, education &amp; languages</h2>
        </Reveal>

        <div className="cred-grid">
          <Reveal className="cred-card glass glass-hover">
            <h3>Certifications</h3>
            {certificates.map((certificate) => (
              <div className="cred-item" key={certificate.name}>
                <div className="cred-name">{certificate.name}</div>
                <div className="cred-meta">
                  {certificate.issuer} · {certificate.year}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="cred-card glass glass-hover" delay={80}>
            <h3>Education</h3>
            {education.map((entry) => (
              <div className="cred-item" key={entry.degree}>
                <div className="cred-name">{entry.degree}</div>
                <div className="cred-meta">
                  {entry.place} · {entry.year}
                  {'current' in entry && entry.current ? ' · In progress' : ''}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="cred-card glass glass-hover" delay={160}>
            <h3>Languages</h3>
            {languages.map((language) => (
              <div className="cred-item" key={language.name}>
                <div className="lang-row">
                  <span className="cred-name">{language.name}</span>
                  <span className="cred-meta">{language.level}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
