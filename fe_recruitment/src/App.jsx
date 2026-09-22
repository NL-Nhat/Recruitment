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

// Employer pages
import EmployerLayout from './layouts/EmployerLayout';
import EmployerDashboard from './pages/employer/Dashboard';
import ManageJobs from './pages/employer/ManageJobs';
import JobForm from './pages/employer/JobForm';
import ManageCandidates from './pages/employer/ManageCandidates';
import CandidateDetail from './pages/employer/CandidateDetail';
import EmployerInterviews from './pages/employer/Interviews';
import CompanyProfile from './pages/employer/CompanyProfile';

// Admin pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageSkills from './pages/admin/ManageSkills';
import ManageRoles from './pages/admin/ManageRoles';
import ManageLocations from './pages/admin/ManageLocations';
import AdminChangePassword from './pages/admin/ChangePassword';
import AdminReports from './pages/admin/Reports';

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

          {/* Employer Routes */}
          <Route path="/employer" element={<ProtectedRoute role="NhaTuyenDung"><EmployerLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<EmployerDashboard />} />
            <Route path="jobs" element={<ManageJobs />} />
            <Route path="jobs/new" element={<JobForm />} />
            <Route path="jobs/edit/:id" element={<JobForm />} />
            <Route path="candidates" element={<ManageCandidates />} />
            <Route path="candidates/:id" element={<CandidateDetail />} />
            <Route path="interviews" element={<EmployerInterviews />} />
            <Route path="company-profile" element={<CompanyProfile />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute role="Admin"><AdminLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="skills" element={<ManageSkills />} />
            <Route path="roles" element={<ManageRoles />} />
            <Route path="locations" element={<ManageLocations />} />
            <Route path="change-password" element={<AdminChangePassword />} />
            <Route path="reports" element={<AdminReports />} />
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
