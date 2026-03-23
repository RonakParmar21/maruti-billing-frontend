import './App.css'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/client/Home';
import Contact from './pages/client/Contact';
import Users from './pages/admin/Users';
import Dashboard from './pages/admin/Dashboard';
import AdminLayout from './pages/admin/AdminLayout';
import About from './pages/client/About';
import Login from './pages/client/Login';

const App = () => {
  return(
    <BrowserRouter>

      <Routes>
        
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App