import Reveal from './Reveal'

// Logos via Simple Icons CDN — fallback para SVG mark geométrico inline
// cdn.simpleicons.org/{slug}/{color}
const SPONSORS = [
  {
    name: 'GitHub',
    logoUrl: 'https://cdn.simpleicons.org/github/23262F',
    url: '#',
  },
  {
    name: 'Google',
    logoUrl: 'https://cdn.simpleicons.org/google/23262F',
    url: '#',
  },
  {
    name: 'AWS',
    logoUrl: 'https://cdn.simpleicons.org/amazonwebservices/23262F',
    url: '#',
  },
  {
    name: 'Microsoft',
    logoUrl: 'https://cdn.simpleicons.org/microsoft/23262F',
    url: '#',
  },
  {
    name: 'Figma',
    logoUrl: 'https://cdn.simpleicons.org/figma/23262F',
    url: '#',
  },
  {
    name: 'Notion',
    logoUrl: 'https://cdn.simpleicons.org/notion/23262F',
    url: '#',
  },
  {
    name: 'Vercel',
    logoUrl: 'https://cdn.simpleicons.org/vercel/23262F',
    url: '#',
  },
  {
    name: 'Cloudflare',
    logoUrl: 'https://cdn.simpleicons.org/cloudflare/23262F',
    url: '#',
  },
]

function SponsorLogo({ s }) {
  return (
    <a
      href={s.url}
      className="sponsor"
      aria-label={s.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="sponsor__logo"
        src={s.logoUrl}
        alt={s.name}
        width="120"
        height="40"
        loading="lazy"
        onError={(e) => {
          // Fallback: monograma geométrico SVG inline
          const abbr = s.name.slice(0, 2).toUpperCase()
          e.currentTarget.outerHTML = `<span class="sponsor__mark" aria-label="${s.name}">${abbr}</span>`
        }}
      />
    </a>
  )
}

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="section section--sponsors">
      <div className="container">
        <Reveal className="section__head">
          <h2 className="section__title">Apoio e realização</h2>
        </Reveal>

        {/* Uma única faixa de marquee — sem dupla linha */}
        <div className="sponsors-marquee">
          <div className="sponsors-marquee__row">
            <div className="sponsors-marquee__track">
              {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((s, i) => (
                <SponsorLogo key={`${s.name}-${i}`} s={s} />
              ))}
            </div>
          </div>
        </div>

        <Reveal className="sponsors__cta">
          <p className="sponsors__cta-text">Quer apoiar o CG Tech Day?</p>
          <a href="mailto:contato@cgtechday.com.br" className="btn btn--secondary">
            Fale com a gente
          </a>
        </Reveal>
      </div>
    </section>
  )
}
