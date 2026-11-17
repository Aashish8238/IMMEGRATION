# Overseas Education & Career Consultancy (React + Vite)

## Run
```bash
npm install
npm run dev
```

## Connect the consultation form (admin receives the data)
The form collects **Name, City, Phone, Email** and emails every submission to the admin.

1. Go to https://web3forms.com, enter the admin email, and copy the access key.
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY=your_key`.
3. Restart `npm run dev`. For hosting (Netlify/Vercel), add the same variable in the dashboard.

Prefer Formspree? Set `VITE_FORM_PROVIDER=formspree` and `VITE_FORMSPREE_ID`.
Until a key is set, the form shows a clear "not connected" message instead of a fake success.

Note: the access key is public in frontend code by design; both services restrict it to sending to your email.

## Edit business details
Everything (name, phone, WhatsApp, email, address, social links, team) lives in `src/config/site.js`.
