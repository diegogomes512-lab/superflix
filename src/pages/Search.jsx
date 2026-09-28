import { useMemo, useState } from 'react'
import MediaCard from '../components/MediaCard'
import { catalog } from '../data/catalog'

export default function Search() {
  const [q, setQ] = useState('')
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return catalog
    return catalog.filter(item => [item.title, item.type, ...item.genres].join(' ').toLowerCase().includes(needle))
  }, [q])

  return <main className="page"><h1>Buscar</h1><input className="search-input" autoFocus placeholder="Filmes, séries ou gêneros" value={q} onChange={e => setQ(e.target.value)} /><div className="grid">{results.map(item => <MediaCard key={item.id} item={item} />)}</div></main>
}
