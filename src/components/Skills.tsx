import { softSkills, technicalSkills } from '../data/cv'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">The stack and how I work</h2>
          <p className="section-sub">
            What I build with day to day, plus the habits that keep a team moving.
          </p>
        </Reveal>

        <div className="skills-grid">
          {technicalSkills.map((group, index) => (
            <Reveal
              key={group.category}
              className="skill-card glass glass-hover"
              delay={index * 60}
            >
              <h3>{group.category}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="soft-head">Ways of working</h3>
        </Reveal>
        <Reveal className="soft-row">
          {softSkills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
