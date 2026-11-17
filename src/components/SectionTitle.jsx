export default function SectionTitle({ eyebrow, title, text, center = true }) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-navy-700">{text}</p>}
    </div>
  )
}
