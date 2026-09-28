import { Link, useParams } from 'react-router-dom'
import { catalog } from '../data/catalog'

function listKey(id) { return `superflix:list:${id}` }

export default function Details() {
  const { id } = useParams()
  const item = catalog.find((x) => x.id === id)
  if (!item) return <main className="page"><h1>Conteúdo não encontrado</h1></main>

  const firstPlayable = item.video ? item.id : item.seasons?.[0]?.episodes?.[0]?.id
  const isSaved = localStorage.getItem(listKey(item.id)) === '1'

  const toggleList = () => {
    localStorage.setItem(listKey(item.id), isSaved ? '0' : '1')
    location.reload()
  }

  return (
    <main>
      <section className="details-hero" style={{ background: item.accent }}>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow">{item.type} • {item.year} • {item.rating}</div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="tags">{item.genres.map(g => <span key={g}>{g}</span>)}</div>
          <div className="hero-actions">
            {firstPlayable && <Link className="primary" to={`/watch/${firstPlayable}`}>▶ Assistir</Link>}
            <button className="secondary" onClick={toggleList}>{isSaved ? '✓ Na minha lista' : '+ Minha lista'}</button>
          </div>
        </div>
      </section>
      {(item.seasons || []).map(season => (
        <section className="content-section" key={season.number}>
          <h2>Temporada {season.number}</h2>
          <div className="episodes">
            {season.episodes.map((ep, index) => (
              <Link className="episode" to={`/watch/${ep.id}`} key={ep.id}>
                <div className="episode-number">{index + 1}</div>
                <div><strong>{ep.title}</strong><p>{ep.description}</p></div>
                <span>{ep.duration}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
