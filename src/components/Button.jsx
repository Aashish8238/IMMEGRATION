import { Link } from 'react-router-dom'
const styles = {
  gold: 'bg-gold-500 text-navy-950 hover:bg-gold-400',
  navy: 'bg-navy-900 text-white hover:bg-royal-700',
  outline: 'border border-white/60 text-white hover:bg-white/10',
  ghost: 'border border-navy-200 text-navy-900 hover:bg-navy-50',
}
export default function Button({ to, href, variant = 'gold', className = '', children, ...p }) {
  const c = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition active:scale-[.98] ${styles[variant]} ${className}`
  return href ? <a href={href} className={c} {...p}>{children}</a> : <Link to={to} className={c} {...p}>{children}</Link>
}
