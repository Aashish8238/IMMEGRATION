import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import { site, whatsappLink } from '../config/site'
import LeadForm from '../components/LeadForm'
import Button from '../components/Button'
export default function Contact() {
  useSeo({ title: 'Contact Us', description: 'Book a free consultation about studying or working abroad.' })
  const info = [[Mail, 'Email', site.contact.email], [Phone, 'Phone', site.contact.phone], [MapPin, 'Office', site.contact.address.join(', ')], [Clock, 'Hours', site.contact.hours]]
  return (
    <>
      <section className="bg-navy-900 py-14 text-center text-white sm:py-20"><div className="container max-w-2xl">
        <h1 className="text-4xl !text-white sm:text-5xl">Let’s Plan Your Journey</h1>
        <p className="mt-4 text-navy-200">Share your details and our team will get in touch.</p></div></section>
      <section className="section"><div className="container grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {info.map(([I, t, v]) => <div key={t} className="card flex gap-4 p-5"><I className="mt-1 shrink-0 text-royal-600" size={20} /><div><p className="font-semibold">{t}</p><p className="text-sm text-navy-700">{v}</p></div></div>)}
          <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="navy" className="w-full"><MessageCircle size={18} /> Chat on WhatsApp</Button>
        </div>
        <div className="lg:col-span-3"><LeadForm subtitle="We will contact you to schedule your free consultation." /></div>
      </div></section>
    </>
  )
}
