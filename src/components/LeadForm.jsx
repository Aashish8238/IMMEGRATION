import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { submitLead, isFormConfigured } from '../utils/submitLead'
import { site } from '../config/site'

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-base text-navy-900 placeholder:text-navy-200 ' +
  'transition focus:border-royal-600 focus:outline-none focus:ring-4 focus:ring-royal-100'

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label} <span className="text-gold-600" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
          <AlertCircle size={14} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

/**
 * Consultation / lead form: Name, City, Phone, Email.
 * Data is emailed to the admin through the configured form service.
 */
export default function LeadForm({ title = 'Book Your Free Consultation', subtitle, className = '' }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', city: '', phone: '', email: '', website: '' } })

  const onSubmit = async (values) => {
    if (values.website) return // honeypot: bots fill this hidden field
    setStatus('sending')
    setErrorMsg('')
    try {
      await submitLead(values)
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err.message === 'NOT_CONFIGURED'
          ? 'This form is not connected yet. The site owner needs to add the form key (see README).'
          : `We could not send your details. Please try again, or contact us at ${site.contact.email}.`
      )
    }
  }

  const ariaFor = (name) => ({
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `lead-${name}-error` : undefined,
  })

  return (
    <div className={`card p-6 sm:p-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-navy-700">{subtitle}</p>}

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5 text-green-900"
            role="status"
          >
            <p className="flex items-center gap-2 font-semibold">
              <CheckCircle2 size={20} aria-hidden="true" /> Thank you, your details have been received.
            </p>
            <p className="mt-2 text-sm">Our team will get in touch with you soon.</p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-royal-700 underline underline-offset-4"
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-6 grid gap-5 sm:grid-cols-2"
          >
            {/* honeypot: hidden from real users */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              {...register('website')}
            />

            <div className="sm:col-span-2">
              <Field id="lead-name" label="Full Name" error={errors.name?.message}>
                <input
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-navy-200'}`}
                  {...ariaFor('name')}
                  {...register('name', {
                    required: 'Please enter your name',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                />
              </Field>
            </div>

            <Field id="lead-city" label="City" error={errors.city?.message}>
              <input
                id="lead-city"
                type="text"
                autoComplete="address-level2"
                placeholder="e.g. Surat"
                className={`${inputBase} ${errors.city ? 'border-red-400' : 'border-navy-200'}`}
                {...ariaFor('city')}
                {...register('city', { required: 'Please enter your city' })}
              />
            </Field>

            <Field id="lead-phone" label="Phone Number" error={errors.phone?.message}>
              <input
                id="lead-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-navy-200'}`}
                {...ariaFor('phone')}
                {...register('phone', {
                  required: 'Please enter your phone number',
                  validate: (v) => {
                    const digits = v.replace(/\D/g, '')
                    return (/^[+\d\s()-]+$/.test(v) && digits.length >= 8 && digits.length <= 15) ||
                      'Enter a valid phone number (8–15 digits)'
                  },
                })}
              />
            </Field>

            <div className="sm:col-span-2">
              <Field id="lead-email" label="Email Address" error={errors.email?.message}>
                <input
                  id="lead-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-navy-200'}`}
                  {...ariaFor('email')}
                  {...register('email', {
                    required: 'Please enter your email',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: 'Enter a valid email address' },
                  })}
                />
              </Field>
            </div>

            {status === 'error' && (
              <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
                <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> {errorMsg}
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-navy-950 shadow-soft transition hover:bg-gold-400 focus-visible:outline-royal-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? (
                  <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending…</>
                ) : (
                  <><Send size={18} aria-hidden="true" /> Request Free Consultation</>
                )}
              </button>
              <p className="mt-3 text-xs text-navy-700">
                By submitting, you agree to be contacted about your enquiry. We never share your details.
              </p>
              {!isFormConfigured && import.meta.env.DEV && (
                <p className="mt-2 text-xs text-amber-700">Dev note: no form provider configured yet. Copy .env.example to .env.</p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
