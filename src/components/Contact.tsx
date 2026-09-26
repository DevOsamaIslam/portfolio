import { contacts } from '../data/cv'
import { externalLinkProps, isExternalLink } from '../utils/links'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card glass">
          <h2>Let&rsquo;s talk</h2>
          <p>
            Open to conversations about frontend architecture, agile delivery and anything
            MERN. Email is the fastest way to reach me.
          </p>

          <div className="contact-links">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className="contact-pill"
                href={contact.href}
                {...externalLinkProps(contact.href)}
              >
                <Icon name={contact.icon} size={16} />
                <span>{contact.value}</span>
                {isExternalLink(contact.href) ? (
                  <Icon name="external" size={13} />
                ) : null}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
