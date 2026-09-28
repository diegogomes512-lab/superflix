import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="header">
      <button className="brand" onClick={() => navigate('/')}>SUPERFLIX</button>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/search">Buscar</NavLink>
        <NavLink to="/my-list">Minha lista</NavLink>
      </nav>
      <div className="profile">
        <span>{user?.name}</span>
        <button className="ghost" onClick={() => { logout(); navigate('/login') }}>Sair</button>
      </div>
    </header>
  )
}
