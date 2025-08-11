import './App.css';

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav">
          <div className="brand">EngageAI</div>
          <nav className="nav-links">
            <a href="#benefits">Benefits</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#beta" className="badge-link">Beta</a>
            <a href="#contact" className="btn btn-secondary">Free setup</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Never miss a message — EngageAI replies instantly</h1>
              <p className="subhead">Automate DMs, comments, and replies on Instagram & WhatsApp. 24/7 responses, lead qualification, and email capture — set up in minutes.</p>
              <ul className="trust-bullets">
                <li>Reduce response times from hours to seconds</li>
                <li>Handle ~80% routine questions automatically</li>
                <li>Capture emails and qualify leads in chat</li>
              </ul>
              <div className="cta-row">
                <a href="#contact" className="btn btn-primary">Book free setup</a>
                <a href="#how" className="btn btn-link">See how it works</a>
              </div>
              <p className="risk-reversal">No code required. Cancel anytime.</p>
            </div>
            <div className="hero-card" role="img" aria-label="Demo of automated replies">
              <div className="phone">
                <div className="phone-top" />
                <div className="chat">
                  <div className="bubble left">Hi! How can I book?</div>
                  <div className="bubble right">We’ve got you! Tap ‘Book now’ to pick a time.</div>
                  <div className="bubble left">What’s the price?</div>
                  <div className="bubble right">Starter from $79/mo. Want details by email?</div>
                  <div className="bubble left">Yes – jane@demo.com</div>
                  <div className="bubble right success">Done! We sent pricing to jane@demo.com.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logos" aria-label="Trusted by">
          <div className="container logo-row">
            <span>Trusted by creators and local businesses</span>
            <div className="dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="benefits" id="benefits" aria-labelledby="benefits-title">
          <div className="container">
            <h2 id="benefits-title">Why clients choose EngageAI</h2>
            <div className="cards">
              <div className="card">
                <h3>Instant replies 24/7</h3>
                <p>Answer fans and customers right away, day or night — no more missed DMs.</p>
              </div>
              <div className="card">
                <h3>Lead qualification</h3>
                <p>Trigger forms and offers on keywords like “book” or “price” to move hot prospects forward.</p>
              </div>
              <div className="card">
                <h3>Automatic data capture</h3>
                <p>Collect emails and contact info inside chat — build your list without manual follow-up.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how" id="how" aria-labelledby="how-title">
          <div className="container">
            <h2 id="how-title">Set up in minutes</h2>
            <ol className="steps">
              <li>
                <div className="step-number">1</div>
                <div>
                  <h3>Connect your channel</h3>
                  <p>Instagram or WhatsApp — we use official APIs and best-practice templates.</p>
                </div>
              </li>
              <li>
                <div className="step-number">2</div>
                <div>
                  <h3>Choose your scripts</h3>
                  <p>Plug-and-play flows for FAQs, pricing, bookings, and lead capture.</p>
                </div>
              </li>
              <li>
                <div className="step-number">3</div>
                <div>
                  <h3>Go live and iterate</h3>
                  <p>Monitor conversations and refine prompts with our guidance for better conversions.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="social-proof" aria-labelledby="proof-title">
          <div className="container">
            <h2 id="proof-title">Results that compound</h2>
            <div className="quotes">
              <blockquote>
                <p>“Our DMs used to take hours. Now responses are instant — bookings went up the same week.”</p>
                <footer>— Local salon owner</footer>
              </blockquote>
              <blockquote>
                <p>“Fans finally get answers right away. Email list is growing on autopilot.”</p>
                <footer>— Fitness creator</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing" aria-labelledby="pricing-title">
          <div className="container">
            <h2 id="pricing-title">Free trial → then $300 setup + pay only on wins</h2>
            <div className="no-brainer">
              <div className="value">
                <h3>What you get</h3>
                <ul>
                  <li>24/7 AI replies that never miss a DM or WhatsApp message</li>
                  <li>Lead capture (email/phone) and friction‑free booking links</li>
                  <li>Pre‑built flows for FAQs, pricing, and “book now”</li>
                  <li>Conversion tuning and message scripts tailored to your niche</li>
                </ul>
              </div>
              <div className="offer">
                <div className="price-box">
                  <div className="trial">Start with a free trial</div>
                  <div className="setup">Then one‑time setup: <strong>$300</strong></div>
                  <div className="perf">Performance fee: <strong>10% of revenue EngageAI helps close</strong></div>
                </div>
                <a href="#contact" className="btn btn-primary">Start your free trial</a>
                <p className="risk-reversal">If we don’t generate clear, attributable opportunities during the trial, we don’t move forward.</p>
              </div>
            </div>
            <div className="faq-note">
              <h4>How do we track performance?</h4>
              <ul>
                <li><strong>Attribution tags</strong>: unique links/UTMs in DM replies route to your booking/checkout with tracking</li>
                <li><strong>Keywords → pipelines</strong>: “book”, “price”, “apply” trigger tags we log and share</li>
                <li><strong>Coupon codes</strong>: optional codes auto‑applied so closed revenue is provably attributed</li>
                <li><strong>CRM sync</strong>: we can push tagged leads to your CRM or a shared sheet</li>
                <li><strong>Monthly reconciliation</strong>: you approve what counts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="beta" id="beta" aria-labelledby="beta-title">
          <div className="container">
            <div className="beta-card">
              <div className="badge">Beta — 5 spots</div>
              <h2 id="beta-title">Founders Beta: Free setup + 30 days</h2>
              <p className="beta-sub">I’m accepting <strong>5 creators/entrepreneurs</strong> for an exclusive beta to prove results and build case studies.</p>
              <div className="beta-grid">
                <div>
                  <h3>Why join</h3>
                  <ul>
                    <li>Priority access, white‑glove setup, and custom flows</li>
                    <li>Direct line for rapid tweaks — tuned for conversions</li>
                    <li>Lock in preferred pricing after beta</li>
                  </ul>
                </div>
                <div>
                  <h3>Who’s a fit</h3>
                  <ul>
                    <li>You get consistent DMs and want more bookings/sales</li>
                    <li>You can share basic performance data</li>
                    <li>You can give quick approvals on scripts</li>
                  </ul>
                </div>
              </div>
              <div className="cta-row">
                <a href="#contact" className="btn btn-primary">Apply for the Beta</a>
                <a href="https://calendly.com/engageai/free-setup" target="_blank" rel="noreferrer" className="btn btn-outline">Or book a call</a>
              </div>
              <p className="fineprint">Only 5 seats. We’ll review applicants on a rolling basis this week.</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title">Book a free setup</h2>
            <p className="contact-sub">We’ll connect your channel and launch your first flows.</p>
            <Form />
            
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="brand">EngageAI</div>
          <nav className="footer-links">
            <a href="#home">Home</a>
            <a href="#benefits">Benefits</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="small">© {new Date().getFullYear()} EngageAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Form() {
  return (
    <form id="lead-form" className="lead-form" action="https://formspree.io/f/xqalwjpj" method="POST">
      <input type="text" name="_gotcha" className="honeypot" tabIndex="-1" autoComplete="off" />
      <input type="hidden" name="source" value="landing-form" />
      <input type="hidden" name="_redirect" value="/?submitted=1#contact" />
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Jane Doe" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="jane@company.com" required />
        </label>
        <label className="full">
          <span>Instagram handle or WhatsApp number</span>
          <input name="handle" type="text" placeholder="@yourhandle or +1 555 123 4567" required />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-submit">Get my free setup</button>
      <p className="form-note">By submitting, you agree to be contacted about onboarding. No spam.</p>
    </form>
  );
}
