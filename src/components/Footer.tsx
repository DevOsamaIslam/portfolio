import { profile } from '../data/cv'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <span>{profile.title}</span>
      </div>
    </footer>
  )
}
