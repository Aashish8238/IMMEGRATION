// ─────────────────────────────────────────────────────────────
//  SITE CONFIG: edit everything about the business HERE.
//  Anything marked [EDIT] is a placeholder, not real company data.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'DIXIT',                                      // [EDIT] company name
  tagline: 'Overseas Education & Career Consultancy', // [EDIT]
  url: 'https://www.example.com',                     // [EDIT] live domain (SEO / Open Graph)
  logo: null, // import a logo file and assign it here, e.g. logo: logoSvg

  contact: {
    email: 'hello@yourdomain.com',                    // [EDIT]
    phone: '+00 00000 00000',                         // [EDIT]
    whatsapp: '0000000000',                           // [EDIT] digits only, with country code
    whatsappMessage: 'Hello, I would like to book a free consultation.',
    address: ['[EDIT] Office address line 1', '[EDIT] City, State, Postal code', '[EDIT] Country'],
    hours: 'Mon – Sat, 10:00 AM – 6:00 PM',           // [EDIT]
  },

  social: [
    // Set href to '' to hide an icon.
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ],

  // Team cards on the About page. Replace with real people when ready.
  team: [
    { name: '[EDIT] Team Member Name', role: 'Founder & Lead Consultant', bio: '[EDIT] Add a short, honest introduction.', image: null },
    { name: '[EDIT] Team Member Name', role: 'Senior Education Counsellor', bio: '[EDIT] Add a short, honest introduction.', image: null },
    { name: '[EDIT] Team Member Name', role: 'Career & Overseas Jobs Advisor', bio: '[EDIT] Add a short, honest introduction.', image: null },
    { name: '[EDIT] Team Member Name', role: 'Documentation Specialist', bio: '[EDIT] Add a short, honest introduction.', image: null },
  ],
}

export const whatsappLink = () =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`
