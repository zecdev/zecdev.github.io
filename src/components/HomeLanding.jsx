import Link from 'next/link'

const GithubIcon = props => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

export function HomeLanding() {
  return (
    <div className="zd-home">
      <section className="zd-hero">
        <svg
          className="zd-hero-circuit"
          viewBox="0 0 1400 520"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="var(--zd-border-strong)" strokeWidth="1.4">
            <path d="M0 120 H240 L300 180 H520" />
            <path d="M1400 150 H1150 L1090 210 H860" />
            <path d="M0 400 H180 L250 330 H470" />
            <path d="M1400 420 H1180 L1110 350 H900" />
            <path d="M700 0 V70 L760 130 V210" />
            <path d="M640 520 V440 L580 380 V300" />
          </g>
          <g fill="var(--zec-amber)">
            <circle cx="240" cy="120" r="5" />
            <circle cx="1150" cy="150" r="5" />
            <circle cx="250" cy="330" r="5" />
          </g>
          <g fill="var(--zec-teal)">
            <circle cx="300" cy="180" r="5" />
            <circle cx="760" cy="130" r="5" />
            <circle cx="1110" cy="350" r="5" />
          </g>
          <g fill="var(--zec-coral)">
            <circle cx="1090" cy="210" r="5" />
            <circle cx="580" cy="380" r="5" />
            <circle cx="180" cy="400" r="5" />
          </g>
        </svg>

        <div className="zd-hero-inner">
          <div className="zd-badge">
            <span className="zd-badge-dot" />
            Privacy · built in public
          </div>
          <h1 className="zd-hero-title">
            Tools &amp; resources for the <span className="zd-amber">Zcash</span> ecosystem
          </h1>
          <p className="zd-hero-sub">
            Projects, ecosystem dashboards and documentation. Open, transparent, and community-owned.
          </p>
          <div className="zd-hero-ctas">
            <Link href="/welcome" className="zd-cta-primary">
              Explore the docs
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/zcash-z3/dashboard" className="zd-cta-secondary">
              Zcashd deprecation status
            </Link>
          </div>
        </div>
      </section>

      <section className="zd-start">
        <div className="zd-start-head">
          <h2>Start here</h2>
          <span className="zd-start-path">{'// zecdev.org'}</span>
        </div>
        <div className="zd-cards">
          <Link href="/zcash-z3" className="zd-card zd-card-amber">
            <div className="zd-card-icon" style={{ background: 'var(--zec-amber-soft)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--zec-amber-strong)" strokeWidth="2">
                <path d="M4 5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                <path d="M14 3v6h6M8 13h8M8 17h5" />
              </svg>
            </div>
            <h3>Zcash Z3</h3>
            <p>The Z3 stack: what it is, the zcashd end-of-life, contributing and weekly updates.</p>
          </Link>

          <Link href="/zcash-z3/dashboard" className="zd-card zd-card-teal">
            <div className="zd-card-icon" style={{ background: 'var(--zd-teal-soft)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--zec-teal)" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 3 3 5-6" />
              </svg>
            </div>
            <h3>Deprecation Dashboard</h3>
            <p>Track the projects and milestones retiring zcashd across the ecosystem.</p>
          </Link>

          <Link href="/community" className="zd-card zd-card-coral">
            <div className="zd-card-icon" style={{ background: 'var(--zd-coral-soft)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--zec-coral)" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
              </svg>
            </div>
            <h3>Community Billboard</h3>
            <p>The Zcasher&apos;s wishlist, block explorer directory and calls-to-action.</p>
          </Link>

          <a href="https://github.com/zecdev" target="_blank" rel="noreferrer" className="zd-card zd-card-plain">
            <div className="zd-card-icon" style={{ background: 'var(--zec-surface-2)' }}>
              <GithubIcon style={{ color: 'var(--zec-text)' }} />
            </div>
            <h3>Browse the code</h3>
            <p>Every project lives on GitHub under the ZecDev organization. Contributions welcome.</p>
          </a>
        </div>
      </section>

      <section className="zd-foreword">
        <div className="zd-foreword-inner">
          <div className="zd-foreword-label">A foreword from its maintainer · @pacu</div>
          <blockquote>
            &ldquo;ZecDev is inspired by ZecSec. These tools and resources belong to our beloved
            ecosystem &mdash; like moving small plants to a bigger flowerpot so they can flourish
            and grow stronger. You are all welcome to contribute. Let&rsquo;s keep building the
            Zcash we want to see in the world.&rdquo;
          </blockquote>
          <div className="zd-foreword-credit">Logo designed by @mine from Zcash Brazil · Licensed MIT</div>
        </div>
      </section>
    </div>
  )
}
