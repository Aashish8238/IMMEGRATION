import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you are looking for does not exist.' })
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="text-4xl sm:text-5xl">This page took a different route</h1>
        <p className="mt-4 text-navy-700">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-royal-700">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
