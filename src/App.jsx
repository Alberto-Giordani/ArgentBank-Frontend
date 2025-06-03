import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import PrivateRoot from './components/PrivateRoot'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoot>
                <Profile />
              </PrivateRoot>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
