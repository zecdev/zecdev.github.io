// ── src/app/layout.jsx ──  drop-in replacement (matches zecdev.github.io @ main, Nextra 4.6.1)
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './zecdev.css'
import './home.css'

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700'] })
const plex    = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] })
const mono    = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500', '600'] })

export const metadata = {}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
        <img src="/zecdev-logo.png" alt="" width={32} height={32} />
        <b style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>ZecDev</b>
      </span>
    }
    projectLink="https://github.com/zecdev"
  >
    <a href="/welcome" className="zd-nav-link">Docs</a>
    <a href="/zcash-z3/dashboard" className="zd-nav-link">Dashboard</a>
    <a href="/community" className="zd-nav-link">Community</a>
    <ThemeSwitch lite className="zd-theme-switch" />
  </Navbar>
)

const footer = (
  <Footer>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="/zecdev-logo.png" alt="" width={26} height={26} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>MIT {new Date().getFullYear()} © ZecDev</span>
      </span>
      <span style={{ display: 'flex', gap: 22, fontSize: 13.5 }}>
        <a href="https://z.cash" target="_blank" rel="noreferrer">z.cash</a>
        <a href="https://zechub.wiki" target="_blank" rel="noreferrer">ZecHub</a>
        <a href="https://github.com/zecdev" target="_blank" rel="noreferrer">GitHub</a>
      </span>
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${grotesk.variable} ${plex.variable} ${mono.variable}`}
    >
      <Head
        color={{ hue: 41, saturation: 87, lightness: { light: 42, dark: 60 } }}
        backgroundColor={{ light: 'rgb(251,250,246)', dark: 'rgb(20,19,15)' }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/zecdev/zecdev.github.io/tree/main/src/"
          footer={footer}
          editLink="Edit this page"
          feedback={{ content: 'Question? Give us feedback' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
