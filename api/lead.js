export default async function handler(req, res) {
  // CORS headers for local dev calling a deployed API, or other cross-origin cases
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Formspree-Protection');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name = '', email = '', handle = '', source = 'landing-form', _gotcha = '' } = req.body || {};

    if (_gotcha) {
      return res.status(200).json({ message: 'OK' });
    }

    if (!name || !email || !handle) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const safe = (s) => String(s).toString().slice(0, 500);
    const payload = {
      name: safe(name),
      email: safe(email),
      handle: safe(handle),
      source: safe(source),
      timestamp: new Date().toISOString(),
    };

    // Priority 1: Formspree endpoint (with optional custom key for AJAX protection)
    const formspree = process.env.FORMSPREE_ENDPOINT; // e.g. https://formspree.io/f/xxxxxx
    const formspreeCustomKey = process.env.FORMSPREE_CUSTOM_KEY || '';
    if (formspree) {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };
      if (formspreeCustomKey) {
        headers['Formspree-Protection'] = formspreeCustomKey;
      }
      const r = await fetch(formspree, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error('Formspree forward failed');
      return res.status(200).json({ message: 'Thanks! We will reach out shortly.' });
    }

    // Priority 2: Web3Forms
    const web3key = process.env.WEB3FORMS_ACCESS_KEY; // https://web3forms.com/
    if (web3key) {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3key,
          subject: 'New EngageAI Lead',
          from_name: 'EngageAI Landing',
          name: payload.name,
          email: payload.email,
          message: `Handle: ${payload.handle}\nSource: ${payload.source}\nTime: ${payload.timestamp}`,
        }),
      });
      if (!r.ok) throw new Error('Web3Forms forward failed');
      return res.status(200).json({ message: 'Thanks! We will reach out shortly.' });
    }

    // Priority 3: Resend email
    const resendKey = process.env.RESEND_API_KEY; // https://resend.com/
    const resendTo = process.env.RESEND_TO;
    const resendFrom = process.env.RESEND_FROM || 'engageai@yourdomain.com';
    if (resendKey && resendTo) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [resendTo],
          subject: 'New EngageAI Lead',
          text: `Name: ${payload.name}\nEmail: ${payload.email}\nHandle: ${payload.handle}\nSource: ${payload.source}\nTime: ${payload.timestamp}`,
        }),
      });
      if (!r.ok) throw new Error('Resend email failed');
      return res.status(200).json({ message: 'Thanks! We will reach out shortly.' });
    }

    // If no provider configured, still return success (avoid user friction)
    console.log('Lead received (no provider configured):', payload);
    return res.status(200).json({ message: 'Thanks! We will reach out shortly.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};


