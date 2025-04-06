import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
// import TermsOfService from './Pages/TermsOfService.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/terms-of-service" element={<TermsOfService />} />*/}

          </Routes>
          <Footer />
     </Router>
  </StrictMode>
)
