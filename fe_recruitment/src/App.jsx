import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import CompanyList from './pages/CompanyList';
import CompanyDetail from './pages/CompanyDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="jobs/:id" element={<JobDetail />} />
          <Route path="companies" element={<CompanyList />} />
          <Route path="companies/:id" element={<CompanyDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* Auth routes without GuestLayout (no header/footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
