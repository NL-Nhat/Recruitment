import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Globe, Phone, ChevronLeft, Briefcase } from 'lucide-react';
import { getCompanyById, getJobs } from '../mock/mockData';
import JobCard from '../components/JobCard';
import './CompanyDetail.css';

const CompanyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    const compData = getCompanyById(id);
    if (compData) {
      setCompany(compData);
      
      const allJobs = getJobs();
      const jobs = allJobs.filter(j => j.companyId === compData.id);
      setCompanyJobs(jobs);
    } else {
      navigate('/companies');
    }
  }, [id, navigate]);

  if (!company) return <div className="container py-10 text-center">Loading...</div>;

  return (
    <div className="company-detail-page bg-light">
      <div className="company-cover">
        <div className="container">
          <button onClick={() => navigate(-1)} className="btn btn-outline back-btn-light mb-6">
            <ChevronLeft size={16} /> Quay lại
          </button>
        </div>
      </div>

      <div className="container company-content-wrapper">
        <div className="company-header-card glass-panel">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="company-logo-wrapper">
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="company-logo-giant" />
              ) : (
                <div className="company-logo-giant placeholder flex items-center justify-center">
                  <Briefcase size={48} className="text-muted" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="company-title-large">{company.name}</h1>
              
              <div className="company-meta-row flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2 text-muted">
                  <MapPin size={18} />
                  <span>{company.address}</span>
                </div>
                {company.website && (
                  <div className="flex items-center gap-2 text-muted">
                    <Globe size={18} />
                    <a href={company.website} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{company.website}</a>
                  </div>
                )}
                {company.phone && (
                  <div className="flex items-center gap-2 text-muted">
                    <Phone size={18} />
                    <span>{company.phone}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="company-stats text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">{companyJobs.length}</p>
              <p className="text-muted text-sm mt-1">Việc làm đang mở</p>
            </div>
          </div>
        </div>

        <div className="company-main-content mt-8">
          <div className="glass-panel p-8 mb-8">
            <h2 className="section-title mb-6">Giới thiệu công ty</h2>
            <div className="rich-text">
              <p>{company.description}</p>
            </div>
          </div>

          <div className="company-jobs-section">
            <h2 className="section-title mb-6">Việc làm đang tuyển ({companyJobs.length})</h2>
            <div className="jobs-list">
              {companyJobs.length > 0 ? (
                companyJobs.map(job => <JobCard key={job.id} job={job} />)
              ) : (
                <div className="glass-panel p-8 text-center text-muted">
                  Công ty hiện chưa có tin tuyển dụng nào đang mở.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
