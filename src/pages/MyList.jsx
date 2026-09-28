import MediaCard from '../components/MediaCard'
import { catalog } from '../data/catalog'

export default function MyList() {
  const items = catalog.filter(item => localStorage.getItem(`superflix:list:${item.id}`) === '1')
  return <main className="page"><h1>Minha lista</h1>{items.length ? <div className="grid">{items.map(item => <MediaCard key={item.id} item={item} />)}</div> : <p className="muted">Sua lista está vazia. Abra um título e clique em “Minha lista”.</p>}</main>
}
