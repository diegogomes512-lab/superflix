import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('superflix:user')
    return saved ? JSON.parse(saved) : null
  })

  const login = (email) => {
    const next = { email, name: email.split('@')[0] || 'Usuário' }
    localStorage.setItem('superflix:user', JSON.stringify(next))
    setUser(next)
  }

  const logout = () => {
    localStorage.removeItem('superflix:user')
    setUser(null)
  }

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
