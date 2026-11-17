import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { site } from '../config/site'
import { services } from '../data/services'
import Button from './Button'

const links = [['Home', '/'], ['About Us', '/about'], ['Study Abroad', '/services/study-abroad'], ['Work Abroad', '/services/overseas-job-assistance'], ['Blog', '/blog'], ['FAQ', '/faq'], ['Contact', '/contact']]
const cls = ({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition hover:text-royal-600 ${isActive ? 'text-royal-600' : 'text-navy-800'}`

export function Logo({ light }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
      {site.logo ? <img src={site.logo} alt="" className="h-9" /> :
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 font-display text-lg font-bold text-gold-400">{site.name[0]}</span>}
      <span className={`font-display text-xl font-bold ${light ? 'text-white' : 'text-navy-900'}`}>{site.name}</span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setDd(false) }, [pathname])
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-white focus:p-2">Skip to content</a>
      <nav className="container flex h-16 items-center justify-between" aria-label="Main">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {links.slice(0, 2).map(([l, t]) => <NavLink key={t} to={t} end className={cls}>{l}</NavLink>)}
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button aria-expanded={dd} onClick={() => setDd(!dd)} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 hover:text-royal-600">
              Services <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {dd && (
                <motion.ul initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute left-0 top-full w-72 rounded-xl border border-navy-100 bg-white p-2 shadow-lift">
                  <li><Link to="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-royal-600 hover:bg-ice">All Services</Link></li>
                  {services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm text-navy-800 hover:bg-ice">{s.title}</Link></li>)}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          {links.slice(2).map(([l, t]) => <NavLink key={t} to={t} className={cls}>{l}</NavLink>)}
          <Button to="/contact" className="ml-3 !px-5 !py-2.5 text-sm">Book Free Consultation</Button>
        </div>
        <button className="rounded-lg p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden">
            <div className="container flex max-h-[80vh] flex-col gap-1 overflow-y-auto py-4">
              {links.map(([l, t]) => <NavLink key={t} to={t} end={t === '/'} className="rounded-lg px-3 py-3 font-semibold text-navy-800 hover:bg-ice">{l}</NavLink>)}
              <Link to="/services" className="rounded-lg px-3 py-3 font-semibold text-navy-800 hover:bg-ice">All Services</Link>
              <Button to="/contact" className="mt-2">Book Free Consultation</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
