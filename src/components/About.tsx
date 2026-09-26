import { certificates, jobs, profile, projects } from '../data/cv'
import Reveal from './Reveal'

const stats = [
  { value: profile.years, label: 'Years of experience' },
  { value: `${jobs.length}`, label: 'Senior engineering roles' },
  { value: `${projects.length}`, label: 'Projects shipped' },
  { value: `${certificates.length}`, label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">About</span>
          <h2 className="section-title">Software, delivered the agile way</h2>
        </Reveal>

        <Reveal className="about-card glass">
          <p>{profile.summary}</p>
          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
