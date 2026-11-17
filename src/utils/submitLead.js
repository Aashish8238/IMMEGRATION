// Sends a lead to the admin via a form service (no custom backend needed).
// Configure in .env (see .env.example). Providers: "web3forms" | "formspree".
import { site } from '../config/site'

const provider = (import.meta.env.VITE_FORM_PROVIDER || '').toLowerCase()
const web3Key = import.meta.env.VITE_WEB3FORMS_KEY
const formspreeId = import.meta.env.VITE_FORMSPREE_ID

export const isFormConfigured =
  (provider === 'web3forms' && !!web3Key) || (provider === 'formspree' && !!formspreeId)

export async function submitLead(data) {
  if (!isFormConfigured) {
    throw new Error('NOT_CONFIGURED')
  }

  const payload = {
    name: data.name,
    city: data.city,
    phone: data.phone,
    email: data.email,
    ...(data.interest ? { interested_in: data.interest } : {}),
    source_page: window.location.pathname,
    submitted_at: new Date().toISOString(),
  }

  let res
  if (provider === 'web3forms') {
    res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `New enquiry from ${data.name} (${site.name} website)`,
        from_name: `${site.name} Website`,
        ...payload,
      }),
    })
  } else {
    res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
  }

  const json = await res.json().catch(() => ({}))
  const ok = provider === 'web3forms' ? json.success === true : res.ok
  if (!ok) throw new Error(json.message || 'SUBMIT_FAILED')
  return true
}
