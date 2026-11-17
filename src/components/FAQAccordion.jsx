import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={f.q} className="card overflow-hidden">
          <h3 className="font-sans text-base font-semibold">
            <button id={`faq-b-${f.q.length}-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${f.q.length}-${i}`}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              {f.q}<ChevronDown size={20} className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div id={`faq-p-${f.q.length}-${i}`} role="region" initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-navy-700">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
