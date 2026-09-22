import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

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

// Candidate imports
import CandidateLayout from './layouts/CandidateLayout';
import Dashboard from './pages/candidate/Dashboard';
import Profile from './pages/candidate/Profile';
import Applications from './pages/candidate/Applications';
import Interviews from './pages/candidate/Interviews';
import AIReview from './pages/candidate/AIReview';
import ChangePassword from './pages/candidate/ChangePassword';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* All Main Routes inside GuestLayout */}
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<JobList />} />
            <Route path="jobs/:id" element={<JobDetail />} />
            <Route path="companies" element={<CompanyList />} />
            <Route path="companies/:id" element={<CompanyDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Candidate Protected Routes (Inside GuestLayout) */}
            <Route path="candidate" element={
              <ProtectedRoute>
                <CandidateLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="applications" element={<Applications />} />
              <Route path="interviews" element={<Interviews />} />
              <Route path="ai-review" element={<AIReview />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
          </Route>

          {/* Auth routes without GuestLayout (no header/footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
