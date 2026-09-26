import { jobs } from "../data/cv"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Where I&rsquo;ve worked</h2>
          <p className="section-sub">
            Seven years of aggregate experience in the IT sector, 3 years of
            ITIL and 4 years of web development, shipping CRM products and
            running the agile ceremonies that keep delivery predictable.
          </p>
        </Reveal>

        <div className="timeline">
          {jobs.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              className="timeline-item glass glass-hover"
              delay={index * 80}>
              <div className="job-head">
                <h3 className="job-role">{job.role}</h3>
                <span className="job-company">{job.company}</span>
                <span className="job-period">{job.period}</span>
                <span className="job-location">{job.location}</span>
              </div>

              <ul className="job-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
