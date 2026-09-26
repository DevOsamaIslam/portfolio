import { contacts, profile } from '../data/cv'
import { externalLinkProps } from '../utils/links'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Hero() {
  const email = contacts.find((contact) => contact.icon === 'mail')

  return (
    <section id="home" className="hero">
      <div className="container">
        <Reveal className="hero-card glass">
          <div className="hero-copy">
            <p className="hero-greeting">Hello, I&rsquo;m</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-ctas">
              <a className="btn btn-primary" href="#projects">
                View projects
                <Icon name="arrow-right" size={17} />
              </a>
              {email ? (
                <a className="btn btn-ghost" href={email.href}>
                  <Icon name="mail" size={17} />
                  Email me
                </a>
              ) : null}
            </div>

            <div className="hero-contacts">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  className="chip"
                  href={contact.href}
                  title={`${contact.label}: ${contact.value}`}
                  {...externalLinkProps(contact.href)}
                >
                  <Icon name={contact.icon} size={15} />
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-badge" aria-hidden="true">
            {profile.initials}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
