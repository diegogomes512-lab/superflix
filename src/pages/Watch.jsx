import { Link, useParams } from 'react-router-dom'
import { findPlayable } from '../data/catalog'

export default function Watch() {
  const { id } = useParams()
  const playable = findPlayable(id)
  if (!playable) return <main className="watch-page"><p>Vídeo não encontrado.</p><Link to="/">Voltar</Link></main>

  return (
    <main className="watch-page">
      <div className="watch-topbar"><Link to={`/title/${playable.parent.id}`}>← Voltar</Link><strong>{playable.parent.title}{playable.title !== playable.parent.title ? ` — ${playable.title}` : ''}</strong></div>
      <video className="player" controls autoPlay src={playable.video} />
      <div className="watch-info"><h1>{playable.title}</h1><p>{playable.description || playable.parent.description}</p></div>
    </main>
  )
}
