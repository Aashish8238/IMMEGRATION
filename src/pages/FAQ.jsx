import useSeo from '../hooks/useSeo'
import { faqs } from '../data/faqs'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
export default function FAQ() {
  useSeo({ title: 'FAQ', description: 'Answers about studying abroad, overseas jobs, admissions, visas and documentation.' })
  return (<><section className="section"><div className="container max-w-3xl">
    <SectionTitle eyebrow="FAQ" title="Your questions, answered" text="Rules and requirements change, so always confirm current details with official sources." />
    <FAQAccordion items={faqs} /></div></section><CTASection /></>)
}
