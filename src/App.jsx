import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import PrivateRoot from './components/PrivateRoot'

// Defines application routes and wraps pages in a common Layout
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout containerClass="light-bg">
            <Home />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />
        <Route
          path="/profile"
          element={
            <Layout>
              <PrivateRoot>
                <Profile />
              </PrivateRoot>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
