import Button from './Button'
export default function CTASection() {
  return (
    <section className="bg-navy-900 py-16 text-center sm:py-20">
      <div className="container max-w-2xl">
        <h2 className="text-3xl text-white sm:text-4xl">Your Future Has No Borders</h2>
        <p className="mt-4 text-navy-200">Take the first step today. Talk to our team about your goals and get clear, honest guidance on what comes next.</p>
        <Button to="/contact" className="mt-8">Book Your Free Consultation</Button>
      </div>
    </section>
  )
}
