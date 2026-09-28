import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Details from './pages/Details'
import Watch from './pages/Watch'
import Search from './pages/Search'
import MyList from './pages/MyList'

function Shell({ children }) {
  return <><Header />{children}</>
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Shell><Home /></Shell>} />
        <Route path="/search" element={<Shell><Search /></Shell>} />
        <Route path="/my-list" element={<Shell><MyList /></Shell>} />
        <Route path="/title/:id" element={<Shell><Details /></Shell>} />
        <Route path="/watch/:id" element={<Watch />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
