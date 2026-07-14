'use client'

import { Fragment, useEffect, useState } from 'react'

// Milestones from https://zcash.github.io/zcash/user/end-of-life.html
// Timestamps are UTC midnight of the listed day; day precision is all the
// source page provides, and two of the dates are themselves estimates.
const MILESTONES = [
  {
    ts: Date.UTC(2026, 6, 2),
    date: 'July 2nd, 2026',
    title: 'Ironwood / NU6.3 testnet deployment',
    detail: 'NU6.3-ready node releases are deployed to testnet.',
  },
  {
    ts: Date.UTC(2026, 6, 4),
    date: 'July 4th, 2026',
    title: 'Ironwood / NU6.3 testnet activation',
    detail: 'NU6.3 activates on testnet at block 4,134,000.',
  },
  {
    ts: Date.UTC(2026, 6, 9),
    date: 'July 9th, 2026',
    title: 'Ironwood / NU6.3 mainnet deployment',
    detail: 'NU6.3-ready node releases are published for mainnet.',
  },
  {
    ts: Date.UTC(2026, 6, 18),
    date: '~July 18th, 2026',
    estimated: true,
    title: 'zcashd End-of-Support halt',
    detail:
      'At mainnet block 3,417,100 every remaining zcashd binary ' +
      'automatically shuts down and refuses to restart.',
  },
  {
    ts: Date.UTC(2026, 6, 28),
    date: '~July 28th, 2026',
    estimated: true,
    title: 'Ironwood / NU6.3 mainnet activation',
    detail:
      'NU6.3 activates on mainnet. zcashd does not support NU6.3 — ' +
      'the network is Zebra-only from here on.',
  },
]

const DAY = 86_400_000

function daysUntil(ts, now) {
  return Math.max(1, Math.ceil((ts - now) / DAY))
}

function YouAreHere({ now, next }) {
  return (
    <li className="eolw-here" aria-current="step">
      <span className="eolw-dot eolw-dot-here" aria-hidden="true" />
      <div className="eolw-body">
        <span className="eolw-here-label">You are here</span>
        <span className="eolw-here-detail">
          {next
            ? `${daysUntil(next.ts, now)} day${daysUntil(next.ts, now) === 1 ? '' : 's'} until ${next.title}${next.estimated ? ' (estimated)' : ''}`
            : 'zcashd has reached End-of-Life. The network is Zebra-only.'}
        </span>
      </div>
    </li>
  )
}

export function ZcashdEolTimeline() {
  const [now, setNow] = useState(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(id)
  }, [])

  // Index of the first milestone still in the future; -1 → all have passed.
  const nextIdx = now === null ? null : MILESTONES.findIndex((m) => now < m.ts)
  const next = nextIdx === null || nextIdx === -1 ? null : MILESTONES[nextIdx]

  return (
    <div className="eolw" role="group" aria-label="zcashd End-of-Life timeline">
      <style>{CSS}</style>
      <div className="eolw-head">
        <strong>zcashd End-of-Life timeline</strong>
        {now !== null && (
          <span className={`eolw-pill ${next ? '' : 'eolw-pill-over'}`}>
            {next
              ? `${daysUntil(next.ts, now)}d to next milestone`
              : 'timeline complete'}
          </span>
        )}
      </div>
      <ol className="eolw-list">
        {MILESTONES.map((m, i) => {
          const passed = now !== null && (nextIdx === -1 || i < nextIdx)
          const isNext = nextIdx === i
          return (
            <Fragment key={m.ts}>
              {isNext && <YouAreHere now={now} next={next} />}
              <li
                className={`eolw-item ${passed ? 'eolw-passed' : ''} ${isNext ? 'eolw-next' : ''}`}
              >
                <span className="eolw-dot" aria-hidden="true">
                  {passed ? '✓' : ''}
                </span>
                <div className="eolw-body">
                  <span className="eolw-date">
                    {m.date}
                    {m.estimated && <em> · estimated</em>}
                  </span>
                  <span className="eolw-title">{m.title}</span>
                  <span className="eolw-detail">{m.detail}</span>
                </div>
              </li>
            </Fragment>
          )
        })}
        {now !== null && nextIdx === -1 && <YouAreHere now={now} next={null} />}
      </ol>
      <div className="eolw-foot">
        Source:{' '}
        <a
          href="https://zcash.github.io/zcash/user/end-of-life.html"
          target="_blank"
          rel="noreferrer"
        >
          zcashd End-of-Life documentation
        </a>
        . Block-height milestones are estimates and may shift by a few days.
      </div>
    </div>
  )
}

const CSS = `
.eolw {
  border: 1px solid var(--zec-border, #e8e3d6);
  background: var(--zec-surface, #fff);
  border-radius: 12px;
  padding: 1.25rem 1.25rem 1rem;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}
.eolw-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.eolw-pill {
  border: 1px solid var(--zec-amber-strong, #b67d08);
  color: var(--zec-amber-strong, #b67d08);
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}
.eolw-pill-over {
  border-color: var(--zec-teal, #0e9488);
  color: var(--zec-teal, #0e9488);
}
.eolw-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.eolw-item, .eolw-here {
  position: relative;
  display: flex;
  gap: 0.85rem;
  padding: 0 0 1.1rem 0;
}
.eolw-list > *:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 0.65rem;
  top: 1.4rem;
  bottom: -0.1rem;
  width: 2px;
  background: var(--zec-border, #e8e3d6);
}
.eolw-passed:not(:last-child)::before {
  background: var(--zec-amber, #f0b429);
}
.eolw-dot {
  flex: none;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 50%;
  border: 2px solid var(--zec-border, #e8e3d6);
  background: var(--zec-surface, #fff);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  line-height: 1;
  color: #fff;
  margin-top: 0.1rem;
  z-index: 1;
}
.eolw-passed .eolw-dot {
  background: var(--zec-amber, #f0b429);
  border-color: var(--zec-amber, #f0b429);
  color: #3a2c00;
}
.eolw-next .eolw-dot {
  border-color: var(--zec-amber-strong, #b67d08);
}
.eolw-dot-here {
  background: var(--zec-coral, #dc5236);
  border-color: var(--zec-coral, #dc5236);
  animation: eolw-pulse 2s ease-in-out infinite;
}
@keyframes eolw-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(220, 82, 54, 0.45); }
  50% { box-shadow: 0 0 0 7px rgba(220, 82, 54, 0); }
}
.eolw-body {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}
.eolw-date {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--zec-muted, #6e685a);
}
.eolw-date em { text-transform: none; font-style: italic; }
.eolw-title { font-weight: 700; }
.eolw-next .eolw-title { color: var(--zec-amber-strong, #b67d08); }
.eolw-detail, .eolw-here-detail { color: var(--zec-muted, #6e685a); }
.eolw-here-label {
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--zec-coral, #dc5236);
}
.eolw-foot {
  border-top: 1px solid var(--zec-border, #e8e3d6);
  padding-top: 0.6rem;
  font-size: 0.75rem;
  color: var(--zec-muted, #6e685a);
}
.eolw-foot a { color: var(--zec-amber-strong, #b67d08); }
`
