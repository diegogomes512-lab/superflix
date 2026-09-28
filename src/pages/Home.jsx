import { Link } from 'react-router-dom'
import MediaCard from '../components/MediaCard'
import { catalog } from '../data/catalog'

export default function Home() {
  const featured = catalog.find((item) => item.featured) || catalog[0]
  return (
    <main>
      <section className="hero" style={{ background: featured.accent }}>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow">SUPERFLIX ORIGINAL</div>
          <h1>{featured.title}</h1>
          <p>{featured.description}</p>
          <div className="hero-actions">
            <Link className="primary" to={`/watch/${featured.id}`}>▶ Assistir</Link>
            <Link className="secondary" to={`/title/${featured.id}`}>ⓘ Mais informações</Link>
          </div>
        </div>
      </section>
      <section className="content-section">
        <h2>Em destaque</h2>
        <div className="row">{catalog.map((item) => <MediaCard key={item.id} item={item} />)}</div>
      </section>
      <section className="content-section">
        <h2>Séries</h2>
        <div className="row">{catalog.filter(i => i.type === 'Série').map((item) => <MediaCard key={item.id} item={item} />)}</div>
      </section>
    </main>
  )
}
