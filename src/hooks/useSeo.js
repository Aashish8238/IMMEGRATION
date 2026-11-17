import { useEffect } from 'react'
import { site } from '../config/site'

function setMeta(selector, attr, key, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

/** Per-page <title>, description and Open Graph tags. */
export default function useSeo({ title, description, image }) {
  useEffect(() => {
    const full = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
    document.title = full
    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    }
    setMeta('meta[property="og:title"]', 'property', 'og:title', full)
    if (image) setMeta('meta[property="og:image"]', 'property', 'og:image', image)
  }, [title, description, image])
}
