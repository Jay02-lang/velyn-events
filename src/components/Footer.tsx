import { Link } from 'react-router-dom';

const experienceLinks = [
  { label: 'Weddings & Celebrations', href: '/services#weddings-celebrations' },
  { label: 'Corporate Events', href: '/services#corporate-events' },
  { label: 'Event Production', href: '/services#event-production' },
  { label: 'Event Strategy', href: '/services#event-strategy' },
  { label: 'Brand Experiences', href: '/services#brand-experiences' },
  { label: 'Entertainment', href: '/services#entertainment' },
];

const houseLinks = [
  { label: 'Our Story', href: '/about#story' },
  { label: 'Philosophy', href: '/about#philosophy' },
  { label: 'Our Founder', href: '/about#founder' },
  { label: 'The Team', href: '/about#team' },
  { label: 'Client Testimonials', href: '/about#reviews' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ position: 'relative', color: '#F5F5DC', overflow: 'hidden' }}>

      {/* ── Background Image Layer ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.22) saturate(0.6)',
          zIndex: 0,
        }}
      />

      {/* ── Dark green color overlay to tie into palette ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(7,23,14,0.72) 0%, rgba(4,14,8,0.88) 60%, rgba(4,14,8,0.97) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Subtle gold radial glow at top ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '300px',
          background: 'radial-gradient(ellipse at center top, rgba(243,176,82,0.09) 0%, transparent 70%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── Gold top border line ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #F3B052 30%, #F3B052 70%, transparent 100%)',
          opacity: 0.45,
        }}
      />

      {/* ── All content above image ── */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: '1280px', margin: '0 auto', padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px) 48px' }}>

        {/* ── Brand Header ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'clamp(32px, 6vw, 72px)' }}>
          {/* Ornament */}
          <div style={{ marginBottom: '20px', opacity: 0.45 }}>
            <svg width="80" height="22" viewBox="0 0 80 22" fill="none">
              <line x1="0" y1="11" x2="26" y2="11" stroke="#F3B052" strokeWidth="0.6" />
              <polygon points="40,3 50,11 40,19 30,11" fill="none" stroke="#F3B052" strokeWidth="0.9" />
              <line x1="54" y1="11" x2="80" y2="11" stroke="#F3B052" strokeWidth="0.6" />
            </svg>
          </div>

          {/* VELYN wordmark */}
          <div
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(44px, 12vw, 96px)',
              fontWeight: '700',
              letterSpacing: 'clamp(0.1em, 2vw, 0.35em)',
              color: '#F5F5DC',
              lineHeight: 1,
              marginBottom: '14px',
              textShadow: '0 0 120px rgba(243,176,82,0.2), 0 0 40px rgba(243,176,82,0.08)',
            }}
          >
            VELYN
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: 'clamp(10px, 1.5vw, 12px)',
              letterSpacing: 'clamp(0.12em, 2vw, 0.38em)',
              color: '#F3B052',
              textTransform: 'uppercase',
              marginBottom: '32px',
              opacity: 0.8,
              textAlign: 'center',
            }}
          >
            Crafting Extraordinary Experiences
          </div>

          {/* Thin divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', width: '100%', maxWidth: '680px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(243,176,82,0.35))' }} />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="4" y="4" width="10" height="10" transform="rotate(45 9 9)" fill="none" stroke="#F3B052" strokeWidth="0.8" opacity="0.7" />
              <circle cx="9" cy="9" r="1.8" fill="#F3B052" opacity="0.55" />
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(243,176,82,0.35), transparent)' }} />
          </div>
        </div>

        {/* ── Responsive 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-center sm:text-left">
          {/* Col 1: House of Velyn */}
          <div>
            <div style={labelStyle}>The House of Velyn</div>
            <p style={bodyTextStyle} className="mx-auto sm:mx-0">
              Where heritage meets contemporary opulence. We orchestrate celebrations that define legacies — from soulful destination weddings to grand royal spectacles.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 mt-6">
              {/* Instagram */}
              <SocialIcon href="#">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              {/* Facebook */}
              <SocialIcon href="#">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              {/* YouTube */}
              <SocialIcon href="#">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 2: Experiences */}
          <div>
            <div style={labelStyle}>Experiences</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {experienceLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The House */}
          <div>
            <div style={labelStyle}>The House</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {houseLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Atelier */}
          <div>
            <div style={labelStyle}>Contact Atelier</div>

            <ContactItem label="Phone">
              <a
                href="tel:+919876543210"
                style={{ ...linkStyle }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F3B052')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,220,0.65)')}
              >
                +91 98765 43210
              </a>
            </ContactItem>

            <ContactItem label="Email">
              <a
                href="mailto:hello@velyn.in"
                style={{ ...linkStyle }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F3B052')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,220,0.65)')}
              >
                hello@velyn.in
              </a>
            </ContactItem>

            <ContactItem label="Studio">
              <span style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', color: 'rgba(245,245,220,0.65)', lineHeight: 1.6 }}>
                The Velyn Atelier<br />Mumbai, India
              </span>
            </ContactItem>

            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '11px 26px',
                background: 'transparent',
                border: '1px solid rgba(243,176,82,0.45)',
                color: '#F3B052',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(243,176,82,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = '#F3B052';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(243,176,82,0.45)';
              }}
            >
              Begin Your Enquiry →
            </Link>
          </div>
        </div>


        {/* ── Sub-footer ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 border-t border-[#F3B052]/10 pt-8 mt-4">
          <div style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: '13px', color: 'rgba(245,245,220,0.3)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Velyn. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', color: 'rgba(245,245,220,0.3)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(243,176,82,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,220,0.3)')}
              >
                {item}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              style={{
                background: 'transparent',
                border: '1px solid rgba(243,176,82,0.22)',
                color: 'rgba(243,176,82,0.55)',
                width: '34px', height: '34px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s ease',
                fontSize: '16px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#F3B052';
                (e.currentTarget as HTMLElement).style.color = '#F3B052';
                (e.currentTarget as HTMLElement).style.background = 'rgba(243,176,82,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(243,176,82,0.22)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(243,176,82,0.55)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              title="Back to top"
            >
              ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

// ── Shared style objects ─────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  fontFamily: '"Inter", system-ui, sans-serif',
  fontSize: '10px',
  letterSpacing: '0.32em',
  color: '#F3B052',
  textTransform: 'uppercase',
  marginBottom: '20px',
  opacity: 0.8,
  fontWeight: '600',
};

const bodyTextStyle: React.CSSProperties = {
  fontFamily: '"Inter", system-ui, sans-serif',
  fontSize: '14px',
  lineHeight: '1.8',
  color: 'rgba(245,245,220,0.6)',
  maxWidth: '280px',
  fontWeight: '300',
};

const linkStyle: React.CSSProperties = {
  fontFamily: '"Inter", system-ui, sans-serif',
  fontSize: '13px',
  color: 'rgba(245,245,220,0.65)',
  textDecoration: 'none',
  transition: 'color 0.3s',
  fontWeight: '400',
};

// ── Sub-components ───────────────────────────────────────────────────────────

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: '8px', letterSpacing: '0.02em' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#F3B052')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,220,0.65)')}
    >
      <span style={{ fontSize: '7px', color: '#F3B052', opacity: 0.55 }}>◆</span>
      {children}
    </Link>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        width: '38px', height: '38px',
        border: '1px solid rgba(243,176,82,0.28)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#F3B052',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(243,176,82,0.12)';
        (e.currentTarget as HTMLElement).style.borderColor = '#F3B052';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = 'transparent';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(243,176,82,0.28)';
      }}
    >
      {children}
    </a>
  );
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#F3B052', opacity: 0.55, marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
        {label}
      </div>
      {children}
    </div>
  );
}
