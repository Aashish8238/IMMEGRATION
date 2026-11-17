import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../config/site'
import { services } from '../data/services'
import { destinations } from '../data/destinations'
import { Logo } from './Navbar'

const icons = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube }
const h = 'mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-gold-400'
const a = 'text-sm text-navy-200 hover:text-white'
export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 text-navy-200">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm">{site.tagline}. Personalized, transparent guidance for students and professionals exploring opportunities abroad.</p>
          <div className="mt-5 flex gap-3">
            {site.social.filter((s) => s.href).map((s) => { const I = icons[s.name]; return I && (
              <a key={s.name} href={s.href} aria-label={s.name} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950"><I size={16} /></a>) })}
          </div>
        </div>
        <div><h3 className={h}>Quick Links</h3><ul className="space-y-2">
          {[['About Us', '/about'], ['Services', '/services'], ['Blog', '/blog'], ['FAQ', '/faq'], ['Contact', '/contact']].map(([l, t]) => <li key={t}><Link className={a} to={t}>{l}</Link></li>)}</ul></div>
        <div><h3 className={h}>Our Services</h3><ul className="space-y-2">
          {services.slice(0, 6).map((s) => <li key={s.slug}><Link className={a} to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
          <h3 className={`${h} mt-6`}>Destinations</h3><p className="text-sm">{destinations.slice(0, 5).map((d) => d.name).join(' · ')}</p></div>
        <div><h3 className={h}>Contact</h3><ul className="space-y-3 text-sm">
          <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" />{site.contact.email}</li>
          <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" />{site.contact.phone}</li>
          <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" />{site.contact.address.join(', ')}</li></ul></div>
      </div>
      <div className="container mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>We provide guidance only. Admissions, visas and employment are decided by institutions, employers and authorities.</p>
      </div>
    </footer>
  )
}
