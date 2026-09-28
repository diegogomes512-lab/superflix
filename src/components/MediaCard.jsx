import { Link } from 'react-router-dom'

export default function MediaCard({ item }) {
  return (
    <Link className="card" to={`/title/${item.id}`}>
      <div className="card-art" style={{ background: item.accent }}>
        <span>{item.type}</span>
        <strong>{item.title}</strong>
      </div>
      <div className="card-meta"><span>{item.year}</span><span>{item.rating}</span></div>
    </Link>
  )
}
