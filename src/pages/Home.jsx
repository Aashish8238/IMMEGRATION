import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, UserCheck, Globe2, FileText, TrendingUp } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import { images } from '../data/images'
import { services } from '../data/services'
import { destinations } from '../data/destinations'
import { faqs } from '../data/faqs'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'

const highlights = [[UserCheck, 'Personalized Guidance', 'Advice shaped around your goals, not a one-size-fits-all plan.'], [Globe2, 'Global Opportunities', 'Explore study and career paths across many countries.'], [FileText, 'Application Assistance', 'Support with applications and documents at every step.'], [TrendingUp, 'Career-Focused Support', 'Choices made with your long-term future in mind.']]
const steps = ['Initial Consultation', 'Profile Evaluation', 'Opportunity Selection', 'Application & Documentation', 'Preparation for Your Journey']
const why = [['Personalized Approach', 'Every plan starts with your goals.'], ['Transparent Guidance', 'Honest advice, with no guaranteed-outcome claims.'], ['Professional Support', 'Organized, careful help with your paperwork.'], ['Step-by-Step Assistance', 'You always know what comes next.'], ['Global Perspective', 'Options compared across destinations.'], ['Student-Focused Service', 'Your interests come first.']]
const work = ['Career guidance', 'Job search support', 'Resume preparation', 'Interview preparation', 'Documentation guidance', 'Understanding international employment processes']
const testimonials = [1, 2, 3].map((n) => ({ n, text: '[SAMPLE TESTIMONIAL: replace with a real, permitted client review.]', who: '[Sample name], Study Abroad' }))

export default function Home() {
  useSeo({ title: 'Study Abroad & Overseas Career Consultancy', description: 'Personalized guidance for students and professionals exploring international education and overseas career opportunities.', image: images.hero })
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 py-14 text-white sm:py-20 lg:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow !text-gold-400">Overseas Education & Careers</span>
            <h1 className="text-4xl leading-tight !text-white sm:text-5xl lg:text-6xl">Your Global Journey Starts Here</h1>
            <p className="mt-3 text-xl font-medium text-gold-400">Dream Big. Study Abroad. Build Your Future.</p>
            <p className="mt-5 max-w-xl text-navy-200">We help students explore international education and guide professionals toward global career pathways, from choosing a destination to applications and documentation.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/services">Explore Opportunities <ArrowRight size={18} /></Button>
              <Button to="/contact" variant="outline">Book Free Consultation</Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-200">
              {['One-to-one guidance', 'Transparent process', 'Study & work pathways'].map((t) => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold-400" />{t}</li>)}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gold-500/20 blur-2xl" aria-hidden="true" />
            <img src={images.hero} alt="Smiling student holding a notebook on an international university campus" width="740" height="497" fetchpriority="high" className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />
          </motion.div>
        </div>
      </section>

      <section className="bg-ice py-12"><div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card h-full p-6"><I className="text-royal-600" /><h3 className="mt-3 font-sans text-lg font-semibold">{t}</h3><p className="mt-1 text-sm text-navy-700">{d}</p></div></Reveal>)}
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="What we do" title="Services built around your journey" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}><div className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600"><s.icon size={22} /></span>
              <h3 className="mt-4 font-sans text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy-700">{s.text}</p>
              <Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal-600">Learn More <ArrowRight size={14} /></Link>
            </div></Reveal>))}
        </div>
      </div></section>

      <section className="section bg-ice"><div className="container">
        <SectionTitle eyebrow="Study destinations" title="Where would you like to study?" text="Popular destinations to explore. Entry requirements vary, and admission is decided by each institution." />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {destinations.map((d, i) => <Reveal key={d.name} delay={(i % 4) * 0.05}>
            <div className={`flex aspect-[4/5] flex-col justify-end rounded-xl2 bg-gradient-to-br ${d.tone} p-4 text-white shadow-soft sm:p-5`}>
              <h3 className="font-display text-xl !text-white">{d.name}</h3><p className="mt-1 text-xs text-white/85 sm:text-sm">{d.text}</p>
            </div></Reveal>)}
        </div>
      </div></section>

      <section className="section"><div className="container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Work abroad</span>
          <h2 className="text-3xl sm:text-4xl">Explore international career opportunities</h2>
          <p className="mt-4 text-navy-700">We help you understand how overseas employment works and prepare to apply with confidence.</p>
          <p className="mt-4 rounded-xl border border-gold-400/50 bg-gold-50 p-4 text-sm text-navy-800">Actual employment and visa decisions are made by employers and the relevant authorities. We provide guidance and support, not guarantees.</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">{work.map((w) => <li key={w} className="card flex items-center gap-3 p-4 font-semibold"><span className="h-2 w-2 rounded-full bg-gold-500" />{w}</li>)}</ul>
      </div></section>

      <section className="section bg-ice"><div className="container">
        <SectionTitle eyebrow="Why choose us" title="Guidance you can trust" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{why.map(([t, d]) => <Reveal key={t}><div className="card h-full p-6"><h3 className="font-sans text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-navy-700">{d}</p></div></Reveal>)}</div>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="How it works" title="Five simple steps" />
        <ol className="grid gap-5 md:grid-cols-5">{steps.map((s, i) => <Reveal key={s} delay={i * 0.06}><li className="card h-full p-5 text-center"><span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-display text-lg font-bold text-gold-400">{i + 1}</span><p className="mt-3 font-semibold">{s}</p></li></Reveal>)}</ol>
      </div></section>

      <section className="section bg-ice"><div className="container">
        <SectionTitle eyebrow="Testimonials" title="What clients may say" text="Sample content. Replace with real, permitted reviews before launch." />
        <div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => <figure key={t.n} className="card p-6"><blockquote className="text-navy-700">“{t.text}”</blockquote><figcaption className="mt-4 text-sm font-semibold">{t.who}</figcaption></figure>)}</div>
      </div></section>

      <section className="section"><div className="container max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
        <FAQAccordion items={faqs} />
        <p className="mt-6 text-center"><Link to="/faq" className="font-semibold text-royal-600">See all FAQs →</Link></p>
      </div></section>
      <CTASection />
    </>
  )
}
