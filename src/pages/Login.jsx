import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('demo@superflix.local')
  const [password, setPassword] = useState('123456')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function submit(e) {
    e.preventDefault()
    if (!email || !password) return
    login(email)
    navigate(location.state?.from?.pathname || '/', { replace: true })
  }

  return (
    <main className="login-page">
      <div className="login-glow" />
      <form className="login-card" onSubmit={submit}>
        <div className="brand big">SUPERFLIX</div>
        <h1>Entrar</h1>
        <p>Versão de desenvolvimento. Depois podemos ligar este formulário ao Firebase Auth.</p>
        <label>E-mail<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" /></label>
        <label>Senha<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" /></label>
        <button className="primary" type="submit">Entrar</button>
        <small>Use qualquer e-mail e senha nesta versão demonstrativa.</small>
      </form>
    </main>
  )
}
