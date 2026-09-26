import { projects, type Project } from '../data/cv'
import { externalLinkProps } from '../utils/links'
import Icon from './Icon'
import Reveal from './Reveal'

const featured = projects.find((project) => project.featured)
const openSource = projects.filter((project) => !project.featured)

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="project-tags">
      {tags.map((tag) => (
        <span className="chip" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function ProjectLink({ project, label }: { project: Project; label: string }) {
  if (!project.href) return null

  return (
    <a
      className="project-link"
      href={project.href}
      {...externalLinkProps(project.href)}
    >
      {label}
      <Icon name="external" size={14} />
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Things I&rsquo;ve built</h2>
          <p className="section-sub">
            A live product plus the open-source hooks and utilities I reach for in my own
            work. Every card links out to the running site or the source.
          </p>
        </Reveal>

        <div className="project-grid">
          {featured ? (
            <Reveal className="project-card project-featured glass glass-hover">
              <div className="project-body">
                <span className="project-flag">Live</span>
                <h3>{featured.name}</h3>
                <p>{featured.description}</p>
                <ProjectTags tags={featured.tags} />
                <ProjectLink project={featured} label="Visit the site" />
              </div>
              <div className="project-visual" aria-hidden="true">
                {featured.name.replace(/\..*$/, '')}
              </div>
            </Reveal>
          ) : null}

          {openSource.map((project, index) => (
            <Reveal
              key={project.name}
              className="project-card glass glass-hover"
              delay={index * 60}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ProjectTags tags={project.tags} />
              <ProjectLink project={project} label="View source" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
